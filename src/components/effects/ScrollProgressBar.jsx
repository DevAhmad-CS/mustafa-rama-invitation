import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 })

  return (
    <motion.div
      className="scroll-progress-bar fixed inset-x-0 top-0 z-[70] h-[3px] w-full origin-left"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
