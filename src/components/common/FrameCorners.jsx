import { motion } from 'framer-motion'

const CORNER_PATH = 'M2 34 L2 12 C2 6 6 2 12 2 L34 2'
const CORNER_ACCENT = 'M2 21 L2 12 C2 8.4 4.4 6 8 5.2'

function Corner({ position }) {
  const placement = {
    'top-left': 'absolute -left-1 -top-1 h-9 w-9',
    'top-right': 'absolute -right-1 -top-1 h-9 w-9 -scale-x-100',
    'bottom-left': 'absolute -bottom-1 -left-1 h-9 w-9 -scale-y-100',
    'bottom-right': 'absolute -bottom-1 -right-1 h-9 w-9 -scale-x-100 -scale-y-100',
  }[position]

  return (
    <svg viewBox="0 0 40 40" className={placement} aria-hidden="true">
      <defs>
        <linearGradient id={`corner-grad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6E6A8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A67C00" />
        </linearGradient>
      </defs>
      <path d={CORNER_PATH} fill="none" stroke={`url(#corner-grad-${position})`} strokeWidth="1.6" strokeLinecap="round" />
      <path d={CORNER_ACCENT} fill="none" stroke={`url(#corner-grad-${position})`} strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
      <circle cx="2" cy="34" r="1.6" fill="#D4AF37" />
    </svg>
  )
}

/**
 * Open gold corner frame — a light "picture frame" treatment instead of a
 * boxed arch, so the content inside can use the full available width.
 */
export default function FrameCorners({ animate = false, className = '' }) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
      initial={animate ? { opacity: 0, scale: 0.94 } : false}
      animate={animate ? { opacity: 1, scale: 1 } : false}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Corner position="top-left" />
      <Corner position="top-right" />
      <Corner position="bottom-left" />
      <Corner position="bottom-right" />
    </motion.div>
  )
}
