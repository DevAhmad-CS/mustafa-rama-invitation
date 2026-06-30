import { useId } from 'react'
import { motion } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'

const PETALS = [
  { id: 1, left: '12%', width: 11, delay: 0, duration: 13, drift: 16, rotate: -20, opacity: 0.5 },
  { id: 2, left: '80%', width: 14, delay: 2.4, duration: 15.5, drift: -15, rotate: 25, opacity: 0.55 },
  { id: 3, left: '46%', width: 9, delay: 4.6, duration: 14, drift: 11, rotate: 10, opacity: 0.4 },
  { id: 4, left: '90%', width: 9, delay: 1.5, duration: 16.5, drift: -9, rotate: -15, opacity: 0.38 },
  { id: 5, left: '28%', width: 10, delay: 3.2, duration: 14.5, drift: -13, rotate: 18, opacity: 0.46 },
  { id: 6, left: '64%', width: 13, delay: 0.8, duration: 17, drift: 14, rotate: -28, opacity: 0.42 },
  { id: 7, left: '6%', width: 9, delay: 5.6, duration: 13.5, drift: 10, rotate: 30, opacity: 0.36 },
  { id: 8, left: '98%', width: 12, delay: 2, duration: 16, drift: -17, rotate: -10, opacity: 0.5 },
]

function PetalShape({ uid }) {
  return (
    <svg viewBox="0 0 20 28" className="h-full w-full">
      <defs>
        <linearGradient id={`petal-fall-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6E6A8" />
          <stop offset="100%" stopColor="#C98AA0" />
        </linearGradient>
      </defs>
      <path d="M10 0 C16 6 19 15 10 28 C1 15 4 6 10 0 Z" fill={`url(#petal-fall-${uid})`} />
    </svg>
  )
}

export default function FloatingPetals({ active = true, className = '' }) {
  const uid = useId().replace(/[:]/g, '')
  const reducedMotion = useReducedMotion()

  if (!active || reducedMotion) return null

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {PETALS.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ left: petal.left, width: petal.width, height: petal.width * 1.4, top: '-6%' }}
          animate={{
            y: ['0vh', '112vh'],
            x: [0, petal.drift, -petal.drift * 0.4, petal.drift * 0.2, 0],
            rotate: [petal.rotate, petal.rotate + 70, petal.rotate + 140],
            opacity: [0, petal.opacity, petal.opacity * 0.75, 0],
          }}
          transition={{ duration: petal.duration, delay: petal.delay, repeat: Infinity, ease: 'linear' }}
        >
          <PetalShape uid={`${uid}-${petal.id}`} />
        </motion.div>
      ))}
    </div>
  )
}
