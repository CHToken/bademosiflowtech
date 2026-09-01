/**
 * Cloudinary Media Utilities for Bademosi FlowTech
 *
 * Supports:
 * - Full Cloudinary Image URLs (https://res.cloudinary.com/<cloud>/image/upload/...)
 * - Full Cloudinary Video URLs (https://res.cloudinary.com/<cloud>/video/upload/...)
 * - Automatic optimization parameters (f_auto, q_auto, width/height scaling)
 * - Automatic poster generation for Cloudinary videos
 * - Public ID resolution with default/custom cloud name
 */

export interface CloudinaryTransformOptions {
  width?: number
  height?: number
  crop?: 'fill' | 'scale' | 'fit' | 'thumb' | 'limit'
  quality?: 'auto' | 'auto:best' | 'auto:good' | 'auto:eco' | 'auto:low' | string
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png' | 'mp4' | 'webm' | string
  startOffset?: number | string // e.g. 'so_0' or 'so_2.5'
}

// Default fallback cloud name if public ID shorthand is used
export const DEFAULT_CLOUDINARY_CLOUD_NAME =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_CLOUDINARY_CLOUD_NAME) ||
  'bademosiflowtech'

/**
 * Checks if a given string is a valid Cloudinary URL
 */
export function isCloudinaryUrl(url?: string): boolean {
  if (!url) return false
  return url.includes('res.cloudinary.com') || url.includes('cloudinary.com')
}

/**
 * Checks if a given URL is a Cloudinary video URL
 */
export function isCloudinaryVideoUrl(url?: string): boolean {
  if (!url) return false
  return isCloudinaryUrl(url) && (url.includes('/video/upload/') || /\.(mp4|webm|mov|m4v|m3u8)($|\?)/i.test(url))
}

/**
 * Formats transformation options into a Cloudinary transformation string segment
 */
export function formatTransformations(options: CloudinaryTransformOptions = {}): string {
  const parts: string[] = []

  const format = options.format || 'auto'
  const quality = options.quality || 'auto'

  parts.push(`f_${format}`)
  parts.push(`q_${quality}`)

  if (options.width) {
    parts.push(`w_${options.width}`)
  }
  if (options.height) {
    parts.push(`h_${options.height}`)
  }
  if (options.crop) {
    parts.push(`c_${options.crop}`)
  }
  if (options.startOffset !== undefined) {
    parts.push(`so_${options.startOffset}`)
  }

  return parts.join(',')
}

/**
 * Injects or updates Cloudinary transformation parameters into an existing Cloudinary URL
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: CloudinaryTransformOptions = {}
): string {
  if (!isCloudinaryUrl(url)) {
    return url
  }

  const transformString = formatTransformations(options)

  // Pattern: https://res.cloudinary.com/<cloud>/<resource_type>/upload/(<existing_transforms>/)?<version_or_path>
  const uploadIndex = url.indexOf('/upload/')
  if (uploadIndex === -1) return url

  const prefix = url.substring(0, uploadIndex + 8) // includes "/upload/"
  const remainder = url.substring(uploadIndex + 8)

  // If already has transformation segment right after upload/ (not starting with 'v' followed by digits)
  const segments = remainder.split('/')
  const firstSegment = segments[0]

  const isVersionSegment = /^v\d+$/.test(firstSegment)
  const hasExistingTransforms = !isVersionSegment && (firstSegment.includes(',') || firstSegment.includes('_'))

  if (hasExistingTransforms) {
    // Replace existing transformation segment
    const rest = segments.slice(1).join('/')
    return `${prefix}${transformString}/${rest}`
  } else {
    // Insert transformation segment
    return `${prefix}${transformString}/${remainder}`
  }
}

/**
 * Builds a full Cloudinary Image URL from a Public ID or returns the optimized full URL
 */
export function getCloudinaryImageUrl(
  urlOrPublicId: string,
  options: CloudinaryTransformOptions = { format: 'auto', quality: 'auto' },
  cloudName = DEFAULT_CLOUDINARY_CLOUD_NAME
): string {
  if (!urlOrPublicId) return ''

  if (urlOrPublicId.startsWith('/') || urlOrPublicId.startsWith('./')) {
    return urlOrPublicId
  }

  if (urlOrPublicId.startsWith('http://') || urlOrPublicId.startsWith('https://')) {
    return optimizeCloudinaryUrl(urlOrPublicId, options)
  }

  // Treat as public ID
  const cleanId = urlOrPublicId.replace(/^\//, '')
  const transformString = formatTransformations(options)
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${cleanId}`
}

/**
 * Builds a full Cloudinary Video URL from a Public ID or returns the optimized full video URL
 */
export function getCloudinaryVideoUrl(
  urlOrPublicId: string,
  options: CloudinaryTransformOptions = { format: 'auto', quality: 'auto' },
  cloudName = DEFAULT_CLOUDINARY_CLOUD_NAME
): string {
  if (!urlOrPublicId) return ''

  if (urlOrPublicId.startsWith('http://') || urlOrPublicId.startsWith('https://')) {
    if (isCloudinaryUrl(urlOrPublicId)) {
      return optimizeCloudinaryUrl(urlOrPublicId, {
        format: options.format || 'mp4',
        quality: options.quality || 'auto',
        ...options,
      })
    }
    return urlOrPublicId
  }

  // Treat as public ID
  const cleanId = urlOrPublicId.replace(/^\//, '')
  const transformString = formatTransformations({
    format: options.format || 'mp4',
    quality: options.quality || 'auto',
    ...options,
  })
  return `https://res.cloudinary.com/${cloudName}/video/upload/${transformString}/${cleanId}`
}

/**
 * Generates an automatic video poster / thumbnail image from a Cloudinary video URL or Public ID
 */
export function getCloudinaryVideoPoster(
  videoUrlOrId: string,
  options: CloudinaryTransformOptions = { startOffset: 0, format: 'jpg', quality: 'auto' }
): string {
  if (!videoUrlOrId) return ''

  if (isCloudinaryUrl(videoUrlOrId)) {
    // Convert /video/upload/ to image/upload/ or keep video/upload/ with .jpg extension and so_0
    const posterUrl = videoUrlOrId.replace(/\.(mp4|webm|mov|m4v|m3u8)($|\?)/i, '.jpg$2')
    return optimizeCloudinaryUrl(posterUrl, {
      startOffset: options.startOffset ?? 0,
      format: 'jpg',
      quality: 'auto',
      width: options.width,
      height: options.height,
    })
  }

  // If local or standard non-cloudinary video URL, caller provides image poster fallback
  return videoUrlOrId
}
