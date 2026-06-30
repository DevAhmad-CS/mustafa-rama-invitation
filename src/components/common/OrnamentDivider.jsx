function HeartGlyph() {
  return (
    <svg width="10" height="9" viewBox="0 0 10 9" aria-hidden="true">
      <defs>
        <linearGradient id="ornament-heart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6E6A8" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      <path
        d="M5 8.4C5 8.4 0.6 5.7 0.6 2.9C0.6 1.4 1.8 0.5 3 0.5C3.8 0.5 4.5 0.9 5 1.6C5.5 0.9 6.2 0.5 7 0.5C8.2 0.5 9.4 1.4 9.4 2.9C9.4 5.7 5 8.4 5 8.4Z"
        fill="url(#ornament-heart-grad)"
      />
    </svg>
  )
}

export default function OrnamentDivider({ className = '', variant = 'default', center = 'dot' }) {
  if (variant === 'luxury') {
    return (
      <div className={`ornament-divider ornament-divider--luxury flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
        <span className="ornament-divider__line ornament-divider__line--long" />
        <span className="ornament-divider__gem" />
        {center === 'heart' ? <HeartGlyph /> : <span className="ornament-divider__dot" />}
        <span className="ornament-divider__gem" />
        <span className="ornament-divider__line ornament-divider__line--long" />
      </div>
    )
  }

  return (
    <div className={`ornament-divider flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
      <span className="ornament-divider__line" />
      <span className="ornament-divider__diamond" />
      <span className="ornament-divider__line" />
    </div>
  )
}
