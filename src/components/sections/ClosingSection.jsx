import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useT } from '../../context/LanguageContext'
import FloralMotif from '../common/FloralMotif'
import Lantern from '../common/Lantern'
import OrnamentDivider from '../common/OrnamentDivider'
import ScrollReveal from '../common/ScrollReveal'
import ShimmerText from '../common/ShimmerText'
import FloatingMotif from '../effects/FloatingMotif'
import ParticleField from '../effects/ParticleField'

export default function ClosingSection() {
  const { closing } = useT()

  return (
    <section className="closing-section relative flex min-h-[60svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <div className="closing-bg pointer-events-none absolute inset-0" />
      <div className="closing-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <ParticleField active density={24} className="opacity-50" />
      <FloatingMotif shape="spark" tone="gold" count={9} />
      <FloatingMotif shape="heart" tone="rose" count={4} />

      <Lantern side="right" size={48} chainHeight={20} className="top-[4%]" delay={0} />
      <Lantern side="left" size={42} chainHeight={32} className="top-[8%]" delay={0.6} />

      <FloralMotif position="top-left" asset={0} size={78} opacity={0.4} tone="gold" className="top-[10%]" />
      <FloralMotif position="bottom-right" asset={2} size={78} opacity={0.4} tone="gold" mirrored className="bottom-[6%]" />

      <ScrollReveal className="relative z-[1] flex flex-col items-center gap-5">
        <motion.span
          animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart size={22} strokeWidth={1.5} className="fill-gold/20 text-gold" />
        </motion.span>

        <OrnamentDivider variant="luxury" className="opacity-80" />

        <div className="flex flex-col gap-2">
          <p className="font-display text-[1.625rem] font-bold leading-[1.7] text-ivory">{closing.line1}</p>
          <p className="font-body text-[0.9375rem] font-light leading-relaxed text-ivory/80">{closing.line2}</p>
        </div>

        <ShimmerText as="p" className="shimmer-text--light font-display text-[1.875rem] font-bold leading-[1.7] tracking-wide">
          {closing.signature}
        </ShimmerText>

        <OrnamentDivider variant="luxury" className="opacity-80" />
      </ScrollReveal>
    </section>
  )
}
