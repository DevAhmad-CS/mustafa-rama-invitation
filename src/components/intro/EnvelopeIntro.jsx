import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useMusic } from '../../context/MusicContext'
import {
  FLAP_LIFT_PX,
  FLAP_MOVE_TRANSITION,
  GLOW_TRANSITION,
  INTRO_ASSETS,
  INTRO_COPY,
  SEAL_TOP,
  SEAL_TOP_ON_FLAP,
  SEAL_WIDTH,
} from '../../data/introAssets'

/** @typedef {'closed' | 'opening' | 'opened'} IntroPhase */

const fullScreenImgClass =
  'pointer-events-none absolute inset-0 h-full w-full object-cover object-center'

const closedSealStyle = {
  left: '50%',
  top: SEAL_TOP,
  transform: 'translate(-50%, -50%)',
  width: SEAL_WIDTH,
  height: SEAL_WIDTH,
}

const flapSealStyle = {
  left: '50%',
  top: SEAL_TOP_ON_FLAP,
  transform: 'translate(-50%, -50%)',
  width: SEAL_WIDTH,
  height: SEAL_WIDTH,
}

function SealWithGlow() {
  return (
    <div className="seal-wrapper relative overflow-visible" style={{ width: '100%', height: '100%' }}>
      <motion.div
        className="seal-glow pointer-events-none"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={GLOW_TRANSITION}
      />
      <img
        src={INTRO_ASSETS.waxSeal}
        alt="ختم الدعوة"
        className="relative z-10 block h-full w-full object-contain"
        draggable={false}
      />
    </div>
  )
}

export default function EnvelopeIntro({ onFlapMoveComplete }) {
  const [phase, setPhase] = useState(/** @type {IntroPhase} */ ('closed'))
  const openingRef = useRef(false)
  const { attemptPlay } = useMusic()

  useEffect(() => {
    ;[INTRO_ASSETS.openedBase, INTRO_ASSETS.topFlap].forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  const handleIntroActivate = () => {
    // Must run synchronously, before any state updates, so the browser still
    // associates audio.play() with this tap's "user gesture".
    attemptPlay()
    if (phase !== 'closed' || openingRef.current) return
    openingRef.current = true
    setPhase('opening')
  }

  const handleMoveComplete = () => {
    if (phase === 'opening') {
      setPhase('opened')
      onFlapMoveComplete?.()
    }
  }

  const isOpenPhase = phase === 'opening' || phase === 'opened'

  return (
    <div
      role="button"
      tabIndex={phase === 'closed' ? 0 : -1}
      aria-label="افتح الدعوة"
      className="envelope-intro relative block h-[100svh] w-full cursor-pointer touch-manipulation overflow-hidden bg-[#F7EDEA] outline-none"
      onTouchStart={phase === 'closed' ? handleIntroActivate : undefined}
      onClick={phase === 'closed' ? handleIntroActivate : undefined}
      onKeyDown={(event) => {
        if (phase !== 'closed') return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleIntroActivate()
        }
      }}
    >
      <img
        src={isOpenPhase ? INTRO_ASSETS.openedBase : INTRO_ASSETS.closedBg}
        alt=""
        className={fullScreenImgClass}
        draggable={false}
      />

      {isOpenPhase && (
        <motion.div
          className="flap-seal-wrapper"
          initial={{ y: 0, x: 0, scale: 1 }}
          animate={{ y: FLAP_LIFT_PX, x: 0, scale: 1 }}
          transition={FLAP_MOVE_TRANSITION}
          onAnimationComplete={handleMoveComplete}
        >
          <img
            src={INTRO_ASSETS.topFlap}
            alt=""
            className="flap-image pointer-events-none"
            draggable={false}
          />

          {/* Seal is a child of the moving wrapper — only y moves on the parent */}
          <div className="seal-wrapper absolute overflow-visible" style={flapSealStyle}>
            <SealWithGlow />
          </div>
        </motion.div>
      )}

      {phase === 'closed' && (
        <>
          <div className="seal-wrapper pointer-events-none absolute overflow-visible" style={{ ...closedSealStyle, zIndex: 10 }}>
            <img
              src={INTRO_ASSETS.waxSeal}
              alt=""
              className="h-full w-full object-contain"
              draggable={false}
            />
          </div>

          <p
            className="pointer-events-none absolute inset-x-0 z-10 text-center font-body text-[0.6875rem] font-light tracking-wide text-[rgba(43,27,47,0.35)]"
            style={{ top: `calc(${SEAL_TOP} + 58px)` }}
          >
            {INTRO_COPY.hint}
          </p>
        </>
      )}

      {phase === 'opening' && (
        <motion.p
          className="pointer-events-none absolute inset-x-0 z-10 text-center font-body text-[0.6875rem] font-light tracking-wide text-[rgba(43,27,47,0.35)]"
          style={{ top: `calc(${SEAL_TOP} + 58px)` }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: GLOW_TRANSITION.ease }}
        >
          {INTRO_COPY.hint}
        </motion.p>
      )}
    </div>
  )
}
