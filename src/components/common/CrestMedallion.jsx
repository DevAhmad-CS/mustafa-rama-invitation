/** Small gold crest with curling flourish wings — replaces the arch's apex finial */
export default function CrestMedallion({ size = 26, className = '' }) {
  return (
    <svg viewBox="0 0 80 40" style={{ width: size * 2, height: size }} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="crest-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6E6A8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A67C00" />
        </linearGradient>
      </defs>
      <path d="M2 20 C18 20 26 10 36 8" fill="none" stroke="url(#crest-grad)" strokeWidth="1" opacity="0.7" strokeLinecap="round" />
      <path d="M78 20 C62 20 54 10 44 8" fill="none" stroke="url(#crest-grad)" strokeWidth="1" opacity="0.7" strokeLinecap="round" />
      <path d="M10 27 C20 25 28 19 36 16" fill="none" stroke="url(#crest-grad)" strokeWidth="0.7" opacity="0.4" strokeLinecap="round" />
      <path d="M70 27 C60 25 52 19 44 16" fill="none" stroke="url(#crest-grad)" strokeWidth="0.7" opacity="0.4" strokeLinecap="round" />
      <circle cx="40" cy="14" r="7" fill="none" stroke="url(#crest-grad)" strokeWidth="1.3" />
      <circle cx="40" cy="14" r="2.6" fill="url(#crest-grad)" />
    </svg>
  )
}
