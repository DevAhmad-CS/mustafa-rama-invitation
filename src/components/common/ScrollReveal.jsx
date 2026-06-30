import { motion } from 'framer-motion'
import {
  SECTION_REVEAL_INITIAL,
  SECTION_REVEAL_TRANSITION,
  SECTION_REVEAL_VISIBLE,
} from '../../data/siteContent'

export default function ScrollReveal({
  as = 'div',
  className = '',
  delay = 0,
  children,
  viewportAmount = 0.25,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={SECTION_REVEAL_INITIAL}
      whileInView={SECTION_REVEAL_VISIBLE}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ ...SECTION_REVEAL_TRANSITION, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
