import { useId } from 'react'
import { motion } from 'framer-motion'

const float = { y: [0, -6, 0], rotate: [-1.5, 1.5, -1.5] }
const floatTransition = { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }

/**
 * Hand-drawn vector lantern (Moroccan/فانوس style) — finial, ribbed glass
 * body with warm inner glow, and a base drop. Fully self-contained SVG so
 * it always renders crisp and on-palette regardless of raster assets.
 */
export default function Lantern({ side = 'right', size = 50, chainHeight = 20, className = '', delay = 0 }) {
  const uid = useId().replace(/[:]/g, '')

  return (
    <div
      className={`hero-lantern pointer-events-none absolute z-[3] select-none ${
        side === 'right' ? 'right-[4%]' : 'left-[4%]'
      } ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="lantern-chain mx-auto"
        style={{ height: chainHeight, width: 1 }}
        animate={{ rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
      />

      <motion.div
        className="relative"
        style={{ width: size, height: size * 1.36 }}
        animate={float}
        transition={{ ...floatTransition, delay }}
      >
        <div className="lantern-glow lantern-glow--outer" />
        <div className="lantern-glow lantern-glow--inner" />

        <svg viewBox="0 0 60 82" className="relative z-[2] h-full w-full drop-shadow-[0_4px_10px_rgba(154,110,20,0.3)]">
          <defs>
            <linearGradient id={`lbody-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F6E6A8" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9C7A1F" />
            </linearGradient>
            <radialGradient id={`lglow-${uid}`} cx="50%" cy="52%" r="58%">
              <stop offset="0%" stopColor="#FFEFC2" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFC85A" stopOpacity="0.18" />
            </radialGradient>
          </defs>

          <path d="M30 2 L34 8 L26 8 Z" fill={`url(#lbody-${uid})`} />
          <rect x="27" y="8" width="6" height="4" fill={`url(#lbody-${uid})`} />
          <path d="M14 16 C14 11 46 11 46 16 L42 20 L18 20 Z" fill={`url(#lbody-${uid})`} />

          <path
            d="M16 20 L44 20 L40 64 C40 70 34 74 30 74 C26 74 20 70 20 64 Z"
            fill={`url(#lglow-${uid})`}
            stroke={`url(#lbody-${uid})`}
            strokeWidth="1.5"
          />

          <path d="M30 20 L30 74" stroke={`url(#lbody-${uid})`} strokeWidth="1" opacity="0.5" />
          <path d="M22.5 20 L25 74" stroke={`url(#lbody-${uid})`} strokeWidth="0.8" opacity="0.35" />
          <path d="M37.5 20 L35 74" stroke={`url(#lbody-${uid})`} strokeWidth="0.8" opacity="0.35" />

          <path d="M22 74 L38 74 L34 80 L26 80 Z" fill={`url(#lbody-${uid})`} />
          <circle cx="30" cy="81" r="2" fill={`url(#lbody-${uid})`} />
        </svg>
      </motion.div>
    </div>
  )
}
