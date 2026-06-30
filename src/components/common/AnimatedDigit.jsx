import { AnimatePresence, motion } from 'framer-motion'
import { REVEAL_EASE } from '../../data/siteContent'

export default function AnimatedDigit({ value, pad = true, compact = false }) {
  const display = pad ? String(value).padStart(2, '0') : String(value)

  return (
    <span
      className={`animated-digit relative inline-flex items-center justify-center overflow-hidden ${
        compact ? 'h-[1.4rem] min-w-[1.6rem]' : 'h-[1.9rem] min-w-[2rem]'
      }`}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={display}
          className={`absolute inset-0 flex items-center justify-center font-display leading-none text-purple-deep ${
            compact ? 'text-[1.125rem]' : 'text-[1.5rem]'
          }`}
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.35, ease: REVEAL_EASE }}
        >
          {display}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
