import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'
import { LanguageProvider } from '../../context/LanguageContext'
import { MusicProvider } from '../../context/MusicContext'
import { ENVELOPE_FADE_TRANSITION } from '../../data/siteContent'
import LanguageToggle from '../common/LanguageToggle'
import MusicToggle from '../common/MusicToggle'
import HeroSection from '../hero/HeroSection'
import MobileOnlyScreen from '../MobileOnlyScreen'
import ClosingSection from '../sections/ClosingSection'
import CountdownSection from '../sections/CountdownSection'
import EventDetailsSection from '../sections/EventDetailsSection'
import LocationSection from '../sections/LocationSection'
import ParentsSection from '../sections/ParentsSection'
import RsvpSection from '../sections/RsvpSection'
import EnvelopeIntro from './EnvelopeIntro'

export default function IntroScreen() {
  const isMobile = useIsMobile()
  const revealStarted = useRef(false)
  const [heroRevealed, setHeroRevealed] = useState(false)
  const [introHidden, setIntroHidden] = useState(false)

  const handleFlapMoveComplete = useCallback(() => {
    if (revealStarted.current) return
    revealStarted.current = true
    setHeroRevealed(true)
    setIntroHidden(true)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    document.body.style.overflow = introHidden ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [introHidden, isMobile])

  if (!isMobile) {
    return <MobileOnlyScreen />
  }

  return (
    <LanguageProvider>
      <MusicProvider>
        <div className={`relative mx-auto w-full max-w-[430px] ${introHidden ? 'overflow-x-hidden' : 'overflow-hidden'}`}>
          <main className="relative">
            <HeroSection revealed={heroRevealed} />
            <CountdownSection />
            <EventDetailsSection />
            <ParentsSection />
            <LocationSection />
            <RsvpSection />
            <ClosingSection />
          </main>

          <div className="fixed inset-x-0 top-3 z-40 flex items-center justify-center gap-2">
            <MusicToggle />
            <LanguageToggle />
          </div>

          <motion.div
            className="fixed inset-x-0 top-0 z-50 mx-auto h-[100svh] w-full max-w-[430px]"
            initial={{ opacity: 1 }}
            animate={{ opacity: introHidden ? 0 : 1 }}
            transition={ENVELOPE_FADE_TRANSITION}
            style={{ pointerEvents: introHidden ? 'none' : 'auto' }}
            aria-hidden={introHidden}
          >
            <EnvelopeIntro onFlapMoveComplete={handleFlapMoveComplete} />
          </motion.div>
        </div>
      </MusicProvider>
    </LanguageProvider>
  )
}
