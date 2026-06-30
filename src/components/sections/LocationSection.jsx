import { MapPin, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'
import { useT } from '../../context/LanguageContext'
import OrnamentDivider from '../common/OrnamentDivider'
import ScrollReveal from '../common/ScrollReveal'
import SectionMark from '../common/SectionMark'
import ShimmerText from '../common/ShimmerText'
import FloatingMotif from '../effects/FloatingMotif'

function FauxMap() {
  return (
    <div className="location-card__map relative flex h-36 w-full items-center justify-center overflow-hidden">
      <div className="map-grid absolute inset-0" aria-hidden="true" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 144" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="map-route"
          d="M-10 118 C 60 80, 110 140, 170 95 S 250 40, 330 28"
          fill="none"
          strokeWidth="2"
          strokeDasharray="3 8"
          strokeLinecap="round"
        />
      </svg>

      <motion.div
        className="relative z-[2] flex items-center justify-center"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="map-pin-rings absolute" aria-hidden="true" />
        <span className="map-pin-badge relative z-[1] flex h-11 w-11 items-center justify-center rounded-full">
          <MapPin size={20} strokeWidth={2} className="text-purple-deep" />
        </span>
      </motion.div>
    </div>
  )
}

function LocationCard({ card, openLabel, delay }) {
  return (
    <ScrollReveal delay={delay} className="w-full">
      <div className="location-card luxury-card w-full overflow-hidden rounded-[22px]">
        <FauxMap />

        <div className="flex flex-col items-center gap-3 px-5 py-5 text-center">
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-[1.375rem] font-bold leading-[1.6] text-purple-deep">{card.title}</h3>
            <p className="font-body text-[0.8125rem] font-light text-burgundy/80">{card.subtitle}</p>
          </div>

          <motion.a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="location-card__btn btn-ornate relative inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-body text-[0.8125rem] font-medium text-ivory"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="btn-ornate__gem btn-ornate__gem--start" aria-hidden="true" />
            <Navigation size={15} strokeWidth={2} />
            {openLabel}
            <span className="btn-ornate__gem btn-ornate__gem--end" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function LocationSection() {
  const { location } = useT()

  return (
    <section className="location-section relative w-full overflow-hidden px-6 pb-16 pt-8">
      <div className="section-bg pointer-events-none absolute inset-0" />
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <FloatingMotif shape="dot" tone="rose" count={10} />
      <FloatingMotif shape="spark" tone="gold" count={5} />

      <div className="relative z-[1] mx-auto flex max-w-[22rem] flex-col items-center gap-8">
        <SectionMark />

        <ScrollReveal className="flex flex-col items-center gap-3 text-center">
          <ShimmerText as="h2" className="font-display text-[1.875rem] font-bold leading-[1.7] text-purple-deep">
            {location.title}
          </ShimmerText>
          <OrnamentDivider variant="luxury" />
        </ScrollReveal>

        <div className="flex w-full flex-col gap-5">
          {location.cards.map((card, index) => (
            <LocationCard key={card.id} card={card} openLabel={location.openLabel} delay={index * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
