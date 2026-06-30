import { useId } from 'react'

const POSITION_CLASSES = {
  'top-left': '-left-3 -top-3',
  'top-right': '-right-3 -top-3',
  'bottom-left': '-bottom-3 -left-3',
  'bottom-right': '-bottom-3 -right-3',
}

const ROTATION_CLASSES = {
  'top-left': '-rotate-12',
  'top-right': 'rotate-12',
  'bottom-left': 'rotate-[-16deg]',
  'bottom-right': 'rotate-[16deg]',
}

/** Slight per-instance variety so repeated motifs don't look identical */
const VARIANTS = [
  { budX: 28, budY: 72, budScale: 0.56, twist: 0 },
  { budX: 93, budY: 70, budScale: 0.5, twist: 6 },
  { budX: 30, budY: 64, budScale: 0.62, twist: -8 },
]

const TONES = {
  rose: {
    petalFrom: '#F8E3DF',
    petalMid: '#C98AA0',
    petalTo: '#4A185D',
    leafFrom: '#F6E6A8',
    leafTo: '#C9A24D',
  },
  gold: {
    petalFrom: '#FCF1D2',
    petalMid: '#E8C77A',
    petalTo: '#A6781F',
    leafFrom: '#FFF6DE',
    leafTo: '#D4AF37',
  },
}

/**
 * Hand-drawn vector floral spray (purple/blush + gold) — replaces raster
 * florals so every section shares one consistent, palette-matched motif.
 */
export default function FloralMotif({
  position = 'top-left',
  asset = 0,
  size = 96,
  opacity = 0.85,
  className = '',
  insetClass = '',
  zIndex = 1,
  mirrored = false,
  tone = 'rose',
}) {
  const uid = useId().replace(/[:]/g, '')
  const positionClass = insetClass || POSITION_CLASSES[position]
  const rotationClass = insetClass ? '' : ROTATION_CLASSES[position]
  const variant = VARIANTS[Math.abs(asset) % VARIANTS.length]
  const palette = TONES[tone] ?? TONES.rose

  return (
    <div
      className={`pointer-events-none absolute ${positionClass} ${rotationClass} ${
        mirrored ? 'scale-x-[-1]' : ''
      } ${className}`}
      style={{ width: size, height: size, opacity, zIndex }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" className="h-full w-full" style={{ transform: `rotate(${variant.twist}deg)` }}>
        <defs>
          <linearGradient id={`petal-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.petalFrom} />
            <stop offset="55%" stopColor={palette.petalMid} />
            <stop offset="100%" stopColor={palette.petalTo} />
          </linearGradient>
          <linearGradient id={`leaf-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.leafFrom} />
            <stop offset="100%" stopColor={palette.leafTo} />
          </linearGradient>
        </defs>

        {/* stems */}
        <path d="M60 100 C50 80 40 65 22 55" fill="none" stroke={`url(#leaf-${uid})`} strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        <path d="M60 100 C66 78 78 64 96 52" fill="none" stroke={`url(#leaf-${uid})`} strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        <ellipse cx="28" cy="50" rx="10" ry="5" fill={`url(#leaf-${uid})`} opacity="0.8" transform="rotate(-35 28 50)" />
        <ellipse cx="92" cy="48" rx="10" ry="5" fill={`url(#leaf-${uid})`} opacity="0.8" transform="rotate(35 92 48)" />

        {/* main blossom — overlapping petals */}
        <g transform="translate(60 46)">
          <ellipse cx="0" cy="-18" rx="13" ry="20" fill={`url(#petal-${uid})`} opacity="0.94" />
          <ellipse cx="-17" cy="-4" rx="13" ry="20" fill={`url(#petal-${uid})`} opacity="0.9" transform="rotate(-48 -17 -4)" />
          <ellipse cx="17" cy="-4" rx="13" ry="20" fill={`url(#petal-${uid})`} opacity="0.9" transform="rotate(48 17 -4)" />
          <ellipse cx="-10" cy="16" rx="12" ry="18" fill={`url(#petal-${uid})`} opacity="0.86" transform="rotate(-100 -10 16)" />
          <ellipse cx="10" cy="16" rx="12" ry="18" fill={`url(#petal-${uid})`} opacity="0.86" transform="rotate(100 10 16)" />
          <circle cx="0" cy="0" r="6.5" fill={`url(#leaf-${uid})`} />
        </g>

        {/* secondary bud */}
        <g transform={`translate(${variant.budX} ${variant.budY}) scale(${variant.budScale})`}>
          <ellipse cx="0" cy="-18" rx="13" ry="20" fill={`url(#petal-${uid})`} opacity="0.82" />
          <ellipse cx="-17" cy="-4" rx="13" ry="20" fill={`url(#petal-${uid})`} opacity="0.78" transform="rotate(-48 -17 -4)" />
          <ellipse cx="17" cy="-4" rx="13" ry="20" fill={`url(#petal-${uid})`} opacity="0.78" transform="rotate(48 17 -4)" />
          <circle cx="0" cy="0" r="6.5" fill={`url(#leaf-${uid})`} />
        </g>
      </svg>
    </div>
  )
}
