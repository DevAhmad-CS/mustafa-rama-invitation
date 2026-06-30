import { Calendar, Clock, Heart, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useT } from '../../context/LanguageContext'
import FloralMotif from '../common/FloralMotif'
import OrnamentDivider from '../common/OrnamentDivider'
import ScrollReveal from '../common/ScrollReveal'
import SectionMark from '../common/SectionMark'
import ShimmerText from '../common/ShimmerText'
import FloatingMotif from '../effects/FloatingMotif'

const ICONS = {
  heart: Heart,
  calendar: Calendar,
}

/** date / time / place — paired with a small inline icon for quick scanning */
const LINE_ICONS = [Calendar, Clock, MapPin]

function EventCard({ card, delay }) {
  const Icon = ICONS[card.icon] ?? Heart

  return (
    <ScrollReveal delay={delay} className="w-full">
      <div className="event-card luxury-card group relative w-full overflow-hidden rounded-[22px] px-6 py-7 text-center">
        <FloralMotif position="top-right" asset={1} size={50} opacity={0.3} />

        <div className="relative z-[1] flex flex-col items-center gap-4">
          <motion.span className="event-card__icon flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-105">
            <Icon size={24} strokeWidth={1.5} className="text-gold" />
          </motion.span>

          <h3 className="font-display text-[1.5rem] font-bold leading-[1.6] text-purple-deep">{card.title}</h3>

          <div className="flex flex-col gap-2 font-body text-[0.875rem] font-light text-burgundy">
            {card.lines.map((line, index) => {
              const LineIcon = LINE_ICONS[index] ?? Calendar
              return (
                <p key={line} className="flex items-center justify-center gap-2">
                  <LineIcon size={14} strokeWidth={1.8} className="text-gold-soft" />
                  <span>{line}</span>
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function EventDetailsSection() {
  const { eventDetails } = useT()

  return (
    <section className="event-details-section relative w-full overflow-hidden px-6 pb-16 pt-8">
      <div className="section-bg pointer-events-none absolute inset-0" />
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <FloatingMotif shape="diamond" tone="purple" count={9} />
      <FloatingMotif shape="spark" tone="gold" count={5} />

      <div className="relative z-[1] mx-auto flex max-w-[22rem] flex-col items-center gap-8">
        <SectionMark />

        <ScrollReveal className="flex flex-col items-center gap-3 text-center">
          <ShimmerText as="h2" className="font-display text-[1.875rem] font-bold leading-[1.7] text-purple-deep">
            {eventDetails.title}
          </ShimmerText>
          <OrnamentDivider variant="luxury" />
        </ScrollReveal>

        <div className="flex w-full flex-col gap-5">
          {eventDetails.cards.map((card, index) => (
            <EventCard key={card.id} card={card} delay={index * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
