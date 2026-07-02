import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useT } from '../../context/LanguageContext'
import { HERO_INITIAL, HERO_REVEALED, HERO_STAGGER, contentTransition } from '../../data/siteContent'
import CrestMedallion from '../common/CrestMedallion'
import FloralMotif from '../common/FloralMotif'
import FrameCorners from '../common/FrameCorners'
import Lantern from '../common/Lantern'
import OrnamentDivider from '../common/OrnamentDivider'
import ShimmerText from '../common/ShimmerText'
import RevealBurst from '../effects/RevealBurst'
import ParticleField from '../effects/ParticleField'
import FloatingPetals from '../effects/FloatingPetals'

export default function HeroSection({ revealed = false }) {
  const { hero } = useT()

  return (
    <section
      className="hero-section relative flex min-h-[88svh] w-full flex-col overflow-hidden text-center"
      aria-hidden={!revealed}
    >
      {/* Background layers */}
      <div className="luxury-bg pointer-events-none absolute inset-0" />
      <div className="paper-texture pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--hero pointer-events-none absolute inset-0" aria-hidden="true" />
      <ParticleField active={revealed} density={26} className="z-[1]" />
      <FloatingPetals active={revealed} className="z-[1]" />
      <RevealBurst active={revealed} />

      {/* Decorative layer — behind content: lanterns up top, florals at the base */}
      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
        <Lantern side="left" size={52} chainHeight={20} className="top-[1%]" delay={0.3} />
        <Lantern side="right" size={56} chainHeight={15} className="top-0" delay={0} />

        <FloralMotif
          asset={1}
          size={90}
          opacity={0.46}
          insetClass="left-0 bottom-[7%] -translate-x-[16%]"
          zIndex={1}
        />
        <FloralMotif
          asset={2}
          size={76}
          opacity={0.42}
          mirrored
          insetClass="right-0 bottom-[5%] translate-x-[14%]"
          zIndex={1}
        />
      </div>

      {/* Main content — vertically centered, no boxed arch so it can breathe wider */}
      <div className="relative z-[5] flex flex-1 flex-col items-center justify-center px-5 pb-12 pt-10">
        <motion.div
          className="hero-panel relative w-full max-w-[23rem]"
          initial={HERO_INITIAL}
          animate={revealed ? HERO_REVEALED : HERO_INITIAL}
          transition={contentTransition(HERO_STAGGER.panel, 1.2)}
        >
          <FrameCorners animate={revealed} />
          <div className="hero-panel-glow pointer-events-none absolute inset-0" aria-hidden="true" />

          <div className="hero-panel-content relative flex flex-col items-center px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={contentTransition(HERO_STAGGER.crest)}
            >
              <CrestMedallion size={24} className="text-gold" />
            </motion.div>

            <motion.p
              className="hero-eyebrow mt-2 font-body text-[0.8125rem] font-normal tracking-[0.16em] text-[#7A3E45]"
              initial={{ opacity: 0, y: 8 }}
              animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={contentTransition(HERO_STAGGER.eyebrow)}
            >
              {hero.eyebrow}
            </motion.p>

            <motion.div
              className="mt-3"
              initial={{ opacity: 0, y: 8 }}
              animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={contentTransition(HERO_STAGGER.title)}
            >
              <ShimmerText as="p" className="font-display text-[1.875rem] font-bold leading-[1.6] tracking-[0.06em]">
                {hero.title}
              </ShimmerText>
            </motion.div>

            <motion.div
              className="mt-6 flex w-full flex-col items-center gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={contentTransition(HERO_STAGGER.names, 0.9)}
            >
              <OrnamentDivider variant="luxury" center="heart" />
              <div className="hero-names flex flex-col items-center">
                <span className="name-gradient font-display text-[3.5rem] leading-[1.65]">{hero.groom}</span>
                <span className="font-display my-2.5 text-[1.25rem] leading-[1.6] text-gold">{hero.ampersand}</span>
                <span className="name-gradient font-display text-[3.5rem] leading-[1.65]">{hero.bride}</span>
              </div>
              <OrnamentDivider variant="luxury" />
            </motion.div>

            <motion.div
              className="mt-4 flex max-w-[17rem] flex-col gap-1.5 font-body text-[0.875rem] font-light leading-[1.7] text-burgundy/90"
              initial={{ opacity: 0, y: 8 }}
              animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={contentTransition(HERO_STAGGER.body)}
            >
              <p>{hero.line1}</p>
              <p>{hero.line2}</p>
            </motion.div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              animate={revealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 6, scale: 0.97 }}
              transition={contentTransition(HERO_STAGGER.date)}
            >
              <span className="date-pill font-display text-[0.9375rem] leading-[1.5]">{hero.date}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint — fixed near bottom, styled to catch the eye */}
      <motion.div
        className="hero-scroll-hint absolute inset-x-0 bottom-12 z-[5] flex flex-col items-center gap-1.5"
        initial={{ opacity: 0, y: 4 }}
        animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        transition={contentTransition(HERO_STAGGER.scrollHint)}
      >
        <motion.div
          className="hero-scroll-badge flex items-center gap-1.5 rounded-full px-3.5 py-1.5"
          animate={revealed ? { boxShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 14px rgba(212,175,55,0.55)', '0 0 0px rgba(212,175,55,0)'] } : {}}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <p className="font-body text-[0.75rem] font-medium tracking-[0.04em] text-[#8a6a1f]">
            {hero.scrollHint}
          </p>
          <motion.span
            className="flex text-gold"
            animate={revealed ? { y: [0, 6, 0] } : {}}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <ChevronDown size={18} strokeWidth={2.2} />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}
