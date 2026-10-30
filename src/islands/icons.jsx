// Lucide icons for React islands, at the parent-app stroke (1.8).
const paths = {
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  'arrow-right': <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  info: <><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>,
  'circle-check': <><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>,
  circle: <circle cx="12" cy="12" r="10" />,
}

export function Icon({ name, size, className = '' }) {
  return (
    <svg
      className={`nb-icon ${className}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={size ? { width: size, height: size } : undefined}
    >
      {paths[name]}
    </svg>
  )
}
