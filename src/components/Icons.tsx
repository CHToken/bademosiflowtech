export interface IconProps {
  className?: string
}

const svg = (props: IconProps) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: props.className,
  'aria-hidden': true,
})

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...svg(props)} fill="currentColor" stroke="none">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...svg(props)} strokeWidth={2.5}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...svg(props)} strokeWidth={2.5}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...svg(props)} fill="currentColor" stroke="none">
      <path d="M12 2l2.9 6.26 6.6.72-4.9 4.53 1.34 6.49L12 16.9l-5.94 3.1 1.34-6.49L2.5 8.98l6.6-.72L12 2z" />
    </svg>
  )
}

export function WaterDropIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M12 2c1.6 2 2.6 3.3 2.6 4.6a2.6 2.6 0 1 1-5.2 0C9.4 5.3 10.4 4 12 2z" />
      <rect x="6" y="10" width="12" height="9" rx="2" />
      <path d="M9 13.5v4M15 13.5v4M8.5 19v3M15.5 19v3" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.8-3.8" />
      <path d="M11 7.2c1.3 1.7 2.1 2.7 2.1 3.9a2.1 2.1 0 1 1-4.2 0c0-1.2.8-2.2 2.1-3.9z" />
    </svg>
  )
}

export function BathIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M3 7h6a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h8" />
      <path d="M17.5 16h2M3 7v9" />
    </svg>
  )
}

export function DrainIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M4 21h16M9 21v-3h6v3" />
      <path d="M12 4v9M9.5 13h5l1.8 3a3.5 3.5 0 0 1-6.6 0l1.8-3z" />
    </svg>
  )
}

export function HeaterIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <rect x="4" y="6" width="16" height="13" rx="2.5" />
      <path d="M8 9.5h8M12 9.5v4M9.5 19.5h5" />
      <path d="M12 2.2c1 1.6 1.9 2.7 1.9 3.7a1.9 1.9 0 1 1-3.8 0c0-1 .9-2.1 1.9-3.7z" />
    </svg>
  )
}

export function ToiletIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <rect x="8" y="3" width="8" height="5" rx="1.5" />
      <path d="M6 8h12c1.5 3 3 5.5 3 8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4c0-2.5 1.5-5 3-8z" />
      <path d="M6.5 12h11" />
    </svg>
  )
}

export function KitchenIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M4 12h16M8 12V8h8v4M8 8h8" />
      <rect x="5" y="12" width="14" height="5" rx="2" />
      <path d="M12 17v3" />
    </svg>
  )
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17a2 2 0 1 0 2.8 2.8l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.6-.7-.7-2.6 2.5-2.5z" />
    </svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...svg(props)} fill="currentColor" stroke="none" viewBox="0 0 24 24">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}

export function PauseIcon(props: IconProps) {
  return (
    <svg {...svg(props)} fill="currentColor" stroke="none" viewBox="0 0 24 24">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  )
}

export function VideoIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  )
}

export function ImageIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...svg(props)} strokeWidth={2.5}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function ExpandIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function UserCheckIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  )
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
    </svg>
  )
}

export function VolumeIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

export function VolumeMuteIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...svg(props)}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15" />
      <path d="M8 21v-3h8v3" />
    </svg>
  )
}


