import { motion } from 'framer-motion'
import { SECTION_REVEAL_TRANSITION } from '../../data/siteContent'

/**
 * Minimal gold ornament marking the start of a new section — replaces the
 * old white wave divider with something intentional and premium.
 */
export default function SectionMark({ className = '' }) {
  return (
    <motion.div
      className={`section-mark mx-auto flex items-center justify-center gap-2.5 ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={SECTION_REVEAL_TRANSITION}
      aria-hidden="true"
    >
      <span className="section-mark__line" />
      <span className="section-mark__diamond" />
      <span className="section-mark__line" />
    </motion.div>
  )
}
