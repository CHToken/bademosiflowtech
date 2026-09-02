import { useState, ChangeEvent, FormEvent } from 'react'
import { ADMIN_PIN } from '../constants'
import { CloseIcon, CloudIcon, CheckIcon, TrashIcon, LockIcon } from './Icons'
import { GalleryItem } from './Gallery'

interface AdminUploadModalProps {
  isOpen: boolean
  onClose: () => void
  onAddItem: (item: GalleryItem) => void
  customItems: GalleryItem[]
  onDeleteItem: (id: string) => void
}

export default function AdminUploadModal({
  isOpen,
  onClose,
  onAddItem,
  customItems,
  onDeleteItem,
}: AdminUploadModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState(false)

  // Form State
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<GalleryItem['category']>('Borehole & Tanks')
  const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  if (!isOpen) return null

  const handlePinSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (pinInput.trim() === ADMIN_PIN) {
      setIsAuthenticated(true)
      setPinError(false)
    } else {
      setPinError(true)
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const previewUrl = URL.createObjectURL(file)
      setFilePreview(previewUrl)
      if (file.type.startsWith('video/')) {
        setMediaType('video')
      } else {
        setMediaType('photo')
      }
    }
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!title || !location || !selectedFile) {
      setErrorMessage('Please fill in title, location, and select a photo/video file.')
      return
    }

    setIsUploading(true)
    setErrorMessage('')

    try {
      const cloudName = import.meta.env?.VITE_CLOUDINARY_CLOUD_NAME || 'dp83y4nnk'
      const uploadPreset = import.meta.env?.VITE_CLOUDINARY_UPLOAD_PRESET || 'bademosiflowtech_preset'

      let mediaUrl = ''

      // If Cloudinary preset is configured, upload directly to Cloudinary
      if (cloudName && uploadPreset) {
        const formData = new FormData()
        formData.append('file', selectedFile)
        formData.append('upload_preset', uploadPreset)
        formData.append('folder', 'bademosiflowtech')

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
          method: 'POST',
          body: formData,
        })

        if (!res.ok) {
          throw new Error('Cloudinary upload failed. Falling back to local storage.')
        }

        const data = await res.json()
        mediaUrl = data.secure_url
      } else {
        // Fallback: Convert file to Base64 data URL for local display
        mediaUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result as string)
          reader.onerror = reject
          reader.readAsDataURL(selectedFile)
        })
      }

      const newItem: GalleryItem = {
        id: `custom-${Date.now()}`,
        title,
        category,
        mediaType,
        image: mediaType === 'photo' ? mediaUrl : '/gallery/borehole-tank.jpg',
        videoUrl: mediaType === 'video' ? mediaUrl : undefined,
        location,
        description: description || 'Professional plumbing project completed by Bademosi FlowTech team.',
        highlights: ['Client approved installation', 'Licensed workmanship guaranteed'],
      }

      onAddItem(newItem)
      setUploadSuccess(true)

      // Reset form
      setTimeout(() => {
        setTitle('')
        setLocation('')
        setDescription('')
        setSelectedFile(null)
        setFilePreview(null)
        setUploadSuccess(false)
        setIsUploading(false)
      }, 1500)
    } catch (err) {
      console.warn('Direct upload error:', err)
      // Fallback local URL
      const localUrl = URL.createObjectURL(selectedFile)
      const newItem: GalleryItem = {
        id: `custom-${Date.now()}`,
        title,
        category,
        mediaType,
        image: mediaType === 'photo' ? localUrl : '/gallery/borehole-tank.jpg',
        videoUrl: mediaType === 'video' ? localUrl : undefined,
        location,
        description: description || 'Professional plumbing project completed by Bademosi FlowTech team.',
        highlights: ['Client approved installation', 'Licensed workmanship guaranteed'],
      }

      onAddItem(newItem)
      setUploadSuccess(true)
      setIsUploading(false)
    }
  }

  return (
    <div className="modal-backdrop active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content admin-upload-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close portal">
          <CloseIcon className="icon" />
        </button>

        {!isAuthenticated ? (
          <div className="admin-pin-screen">
            <div className="admin-icon-badge">
              <LockIcon className="icon" />
            </div>
            <h2>Client Portal Authorization</h2>
            <p>Enter your 4-digit project owner PIN to upload photos or videos to your gallery.</p>

            <form onSubmit={handlePinSubmit} className="pin-form">
              <div className="field">
                <input
                  type="password"
                  placeholder="Enter PIN"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  maxLength={6}
                  autoFocus
                  required
                />
              </div>

              {pinError && <p className="form-error">Incorrect PIN. Please try again.</p>}

              <button type="submit" className="btn btn-primary-accent btn-block">
                Unlock Upload Portal
              </button>
            </form>
          </div>
        ) : (
          <div className="admin-upload-screen">
            <div className="admin-portal-header">
              <h2>Project Gallery Upload Manager</h2>
              <p>Upload project photos or videos directly to your website gallery.</p>
            </div>

            {uploadSuccess && (
              <div className="form-success">
                <CheckIcon className="icon-sm" />
                <span>Media uploaded successfully! Added to your live gallery carousel.</span>
              </div>
            )}

            {errorMessage && <p className="form-error">{errorMessage}</p>}

            <form onSubmit={handleFormSubmit} className="admin-form">
              <div className="form-grid-2">
                <div className="field">
                  <label>Project Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. 2,000L Water Tank & Pump System"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="field">
                  <label>Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as GalleryItem['category'])}
                  >
                    <option value="Borehole &amp; Tanks">Borehole &amp; Tanks</option>
                    <option value="Leak &amp; Burst Pipe">Leak &amp; Burst Pipe</option>
                    <option value="Bathroom &amp; Sanitary">Bathroom &amp; Sanitary</option>
                    <option value="Water Heaters">Water Heaters</option>
                    <option value="Drainage &amp; Sewer">Drainage &amp; Sewer</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="field">
                  <label>Location *</label>
                  <input
                    type="text"
                    placeholder="e.g. Lekki Phase 1, Lagos"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>

                <div className="field">
                  <label>Media Type</label>
                  <select
                    value={mediaType}
                    onChange={(e) => setMediaType(e.target.value as 'photo' | 'video')}
                  >
                    <option value="photo">Photo Image</option>
                    <option value="video">Video Recording</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Project Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe the work done, materials installed, or specifications..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* File Dropzone */}
              <div className="file-upload-zone">
                <input
                  type="file"
                  id="admin-media-file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  className="sr-only"
                  required
                />
                <label htmlFor="admin-media-file" className="file-drop-label">
                  <CloudIcon className="icon-lg text-sky" />
                  <div>
                    <strong>{selectedFile ? selectedFile.name : 'Select Project Photo or Video File'}</strong>
                    <span>Tap to browse files from your phone or laptop</span>
                  </div>
                </label>

                {filePreview && (
                  <div className="preview-box">
                    {mediaType === 'video' ? (
                      <video src={filePreview} controls className="preview-media" />
                    ) : (
                      <img src={filePreview} alt="Upload preview" className="preview-media" />
                    )}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary-accent btn-block"
                disabled={isUploading}
              >
                {isUploading ? 'Uploading to Gallery...' : 'Upload & Publish to Live Gallery'}
              </button>
            </form>

            {/* Custom Uploaded Items Manager */}
            {customItems.length > 0 && (
              <div className="admin-manage-section">
                <h3>Uploaded Gallery Media ({customItems.length})</h3>
                <div className="manage-items-list">
                  {customItems.map((item) => (
                    <div key={item.id} className="manage-item-row">
                      <img src={item.image} alt={item.title} className="manage-thumb" />
                      <div className="manage-info">
                        <strong>{item.title}</strong>
                        <span>{item.category} · {item.location}</span>
                      </div>
                      <button
                        type="button"
                        className="btn-icon-danger"
                        onClick={() => onDeleteItem(item.id)}
                        title="Delete project media"
                      >
                        <TrashIcon className="icon-sm" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
