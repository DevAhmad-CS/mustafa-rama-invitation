import { useT } from '../../context/LanguageContext'
import FloralMotif from '../common/FloralMotif'
import OrnamentDivider from '../common/OrnamentDivider'
import ScrollReveal from '../common/ScrollReveal'
import SectionMark from '../common/SectionMark'
import ShimmerText from '../common/ShimmerText'
import FloatingMotif from '../effects/FloatingMotif'

function ParentCard({ card, delay }) {
  return (
    <ScrollReveal delay={delay} className="w-full">
      <div className="parent-card luxury-card relative w-full overflow-hidden rounded-[20px] px-6 py-6 text-center">
        <p className="font-body text-[0.75rem] font-normal tracking-[0.12em] text-[#7A3E45]">{card.label}</p>
        <p className="mt-2.5 font-display text-[1.4375rem] font-bold leading-[1.6] text-purple-deep">{card.name}</p>
      </div>
    </ScrollReveal>
  )
}

export default function ParentsSection() {
  const { parents } = useT()

  return (
    <section className="parents-section relative w-full overflow-hidden px-6 pb-16 pt-8">
      <div className="section-bg pointer-events-none absolute inset-0" />
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <FloatingMotif shape="leaf" tone="gold" count={9} />
      <FloatingMotif shape="dot" tone="rose" count={4} />

      <FloralMotif position="top-left" asset={2} size={58} opacity={0.32} />
      <FloralMotif position="bottom-right" asset={0} size={58} opacity={0.32} mirrored />

      <div className="relative z-[1] mx-auto flex max-w-[22rem] flex-col items-center gap-8">
        <SectionMark />

        <ScrollReveal className="flex flex-col items-center gap-3 text-center">
          <ShimmerText as="h2" className="font-display text-[1.875rem] font-bold leading-[1.7] text-purple-deep">
            {parents.title}
          </ShimmerText>
          <OrnamentDivider variant="luxury" />
        </ScrollReveal>

        <div className="flex w-full flex-col gap-4">
          {parents.cards.map((card, index) => (
            <ParentCard key={card.id} card={card} delay={index * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
