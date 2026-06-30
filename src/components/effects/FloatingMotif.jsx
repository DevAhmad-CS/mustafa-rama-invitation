import { useMemo } from 'react'
import { motion } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'

const SHAPES = {
  spark: <path d="M5 0 L6.3 3.7 L10 5 L6.3 6.3 L5 10 L3.7 6.3 L0 5 L3.7 3.7 Z" />,
  heart: (
    <path d="M5 9C5 9 0.7 5.9 0.7 2.9C0.7 1.3 1.9 0.4 3.2 0.4C4 0.4 4.6 0.8 5 1.5C5.4 0.8 6 0.4 6.8 0.4C8.1 0.4 9.3 1.3 9.3 2.9C9.3 5.9 5 9 5 9Z" />
  ),
  leaf: <path d="M1 9C1 4 4 1 9 1C9 6 6 9 1 9Z" />,
  diamond: <rect x="2.1" y="2.1" width="5.8" height="5.8" transform="rotate(45 5 5)" />,
  dot: <circle cx="5" cy="5" r="2.6" />,
}

const TONES = {
  gold: '#D4AF37',
  rose: '#C98AA0',
  purple: '#4A185D',
}

/**
 * Lightweight rising ambient motif — a handful of small shapes drifting
 * gently upward. Each section uses a different shape/tone so the motion
 * feels intentional rather than repeated decoration.
 */
export default function FloatingMotif({ shape = 'spark', tone = 'gold', count = 6, className = '' }) {
  const reducedMotion = useReducedMotion()

  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: 6 + ((i * 41) % 90),
        size: 7 + ((i * 13) % 9),
        duration: 8 + ((i * 5) % 7),
        delay: (i * 1.1) % count,
        drift: (i % 2 === 0 ? 1 : -1) * (8 + ((i * 7) % 18)),
      })),
    [count]
  )

  if (reducedMotion) return null

  const color = TONES[tone] ?? TONES.gold
  const glyph = SHAPES[shape] ?? SHAPES.spark

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {items.map((item) => (
        <motion.span
          key={item.id}
          className="absolute"
          style={{ left: `${item.left}%`, bottom: '-6%', width: item.size, height: item.size }}
          initial={{ y: 0, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: [0, -190],
            x: [0, item.drift, 0],
            opacity: [0, 0.8, 0.8, 0],
            rotate: [0, item.drift > 0 ? 50 : -50],
          }}
          transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 10 10" width="100%" height="100%" fill={color}>
            {glyph}
          </svg>
        </motion.span>
      ))}
    </div>
  )
}
