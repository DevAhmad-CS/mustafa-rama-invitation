import { motion } from 'framer-motion'
import { REVEAL_EASE } from '../../data/siteContent'

export default function RevealBurst({ active = false }) {
  if (!active) return null

  return (
    <motion.div
      className="reveal-burst pointer-events-none absolute inset-0 z-[4] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.85, 0] }}
      transition={{ duration: 1.6, ease: REVEAL_EASE }}
      aria-hidden="true"
    >
      <motion.div
        className="reveal-burst__core"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: [0.2, 1.4, 2.2], opacity: [0, 0.7, 0] }}
        transition={{ duration: 1.6, ease: REVEAL_EASE }}
      />
      <motion.div
        className="reveal-burst__ring"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: [0.4, 1.8, 2.6], opacity: [0, 0.5, 0] }}
        transition={{ duration: 1.8, delay: 0.1, ease: REVEAL_EASE }}
      />
    </motion.div>
  )
}
