import { motion } from 'framer-motion'

const PIECES = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2
  return {
    id: i,
    angle,
    distance: 55 + ((i * 37) % 50),
    delay: (i % 5) * 0.04,
    size: 6 + (i % 4) * 2,
    rotate: (i * 53) % 360,
    gold: i % 3 !== 1,
  }
})

/** One-shot celebratory confetti/petal burst — used after RSVP confirmation */
export default function CelebrationBurst() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center" aria-hidden="true">
      {PIECES.map((p) => {
        const x = Math.cos(p.angle) * p.distance
        const yUp = Math.sin(p.angle) * p.distance * 0.55 - 18
        return (
          <motion.span
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size * 1.3,
              background: p.gold
                ? 'linear-gradient(135deg, #F6E6A8, #D4AF37)'
                : 'linear-gradient(135deg, #F3D8D6, #C98AA0)',
            }}
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.4 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [0, x * 0.6, x],
              y: [0, yUp, yUp + 75],
              rotate: p.rotate,
              scale: 1,
            }}
            transition={{ duration: 1.7, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
          />
        )
      })}
    </div>
  )
}
