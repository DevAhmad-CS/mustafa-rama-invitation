import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useT } from '../../context/LanguageContext'
import { LUNCH_TARGET, WEDDING_TARGET } from '../../data/siteContent'
import AnimatedDigit from '../common/AnimatedDigit'
import FloralMotif from '../common/FloralMotif'
import OrnamentDivider from '../common/OrnamentDivider'
import ScrollReveal from '../common/ScrollReveal'
import SectionMark from '../common/SectionMark'
import ShimmerText from '../common/ShimmerText'
import FloatingMotif from '../effects/FloatingMotif'
import ParticleField from '../effects/ParticleField'

const CARD_HOVER_TRANSITION = { duration: 0.25, ease: [0.22, 1, 0.36, 1] }

function getTimeLeft(targetMs) {
  const diff = Math.max(0, targetMs - Date.now())

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

function CountdownCard({ label, value, pad = true, delay = 0, compact = false }) {
  return (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2, transition: CARD_HOVER_TRANSITION }}
      whileTap={{ scale: 0.97, transition: CARD_HOVER_TRANSITION }}
    >
      <div
        className={`countdown-card luxury-card flex flex-col items-center gap-1.5 rounded-2xl ${
          compact ? 'countdown-card--compact' : 'px-2 py-3.5'
        }`}
      >
        <AnimatedDigit value={value} pad={pad} compact={compact} />
        <span
          className={`font-body font-light tracking-wide text-burgundy/75 ${
            compact ? 'text-[0.5625rem]' : 'text-[0.625rem]'
          }`}
        >
          {label}
        </span>
      </div>
    </motion.div>
  )
}

function CountdownBlock({ title, targetMs, labels, compact = false }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetMs))

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(targetMs))
    tick()
    const interval = window.setInterval(tick, 1000)
    return () => window.clearInterval(interval)
  }, [targetMs])

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {compact ? (
        <p className="font-display text-[1.375rem] font-bold leading-[1.6] text-purple-deep">{title}</p>
      ) : (
        <ShimmerText as="h2" className="font-display text-[1.875rem] font-bold leading-[1.7] text-purple-deep">
          {title}
        </ShimmerText>
      )}

      <div className="grid w-full grid-cols-4 gap-2">
        <CountdownCard label={labels.days} value={timeLeft.days} pad={false} delay={0} compact={compact} />
        <CountdownCard label={labels.hours} value={timeLeft.hours} delay={0.08} compact={compact} />
        <CountdownCard label={labels.minutes} value={timeLeft.minutes} delay={0.16} compact={compact} />
        <CountdownCard label={labels.seconds} value={timeLeft.seconds} delay={0.24} compact={compact} />
      </div>
    </div>
  )
}

export default function CountdownSection() {
  const { countdown } = useT()
  const weddingMs = new Date(WEDDING_TARGET).getTime()
  const lunchMs = new Date(LUNCH_TARGET).getTime()

  return (
    <section className="countdown-section relative w-full overflow-hidden px-6 pb-16 pt-8">
      <div className="section-bg pointer-events-none absolute inset-0" />
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <ParticleField active density={18} className="opacity-70" />
      <FloatingMotif shape="spark" tone="gold" count={10} />
      <FloatingMotif shape="diamond" tone="purple" count={4} />

      <FloralMotif position="top-left" asset={0} size={62} opacity={0.36} />
      <FloralMotif position="bottom-right" asset={2} size={62} opacity={0.36} mirrored />

      <div className="relative z-[3] mx-auto flex max-w-[22rem] flex-col items-center gap-8 text-center">
        <SectionMark />

        <ScrollReveal className="w-full">
          <CountdownBlock title={countdown.title} targetMs={weddingMs} labels={countdown.labels} />
        </ScrollReveal>

        <OrnamentDivider variant="luxury" className="opacity-70" />

        <ScrollReveal delay={0.1} className="w-full">
          <CountdownBlock title={countdown.lunchTitle} targetMs={lunchMs} labels={countdown.labels} compact />
        </ScrollReveal>
      </div>
    </section>
  )
}
