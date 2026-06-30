export const INTRO_ASSETS = {
  closedBg: '/assets/intro/envelope/closed-envelope-mobile-bg.png',
  openedBase: '/assets/intro/envelope/opened-envelope-base.png',
  topFlap: '/assets/intro/envelope/envelope-top-flap-cropped.png',
  waxSeal: '/assets/intro/seal/wax-seal-mr.png',
}

export const INTRO_COPY = {
  hint: 'اضغط لفتح الدعوة',
}

/** Seal position on closed envelope canvas (% from top of intro) */
export const SEAL_TOP = '45%'
/** Seal on the moving flap (% from top of flap wrapper — stays on closing point) */
export const SEAL_TOP_ON_FLAP = '96%'
export const SEAL_WIDTH = 'clamp(106px, 29vw, 123px)'

/** Slight upward lift in px — flap + seal move together as one unit */
export const FLAP_LIFT_PX = -200

export const GLOW_DURATION = 0.6
export const FLAP_MOVE_DELAY = 0.55
export const FLAP_MOVE_DURATION = 2.6
export const OPEN_EASE = [0.22, 1, 0.36, 1]

export const GLOW_TRANSITION = {
  duration: GLOW_DURATION,
  ease: OPEN_EASE,
}

export const FLAP_MOVE_TRANSITION = {
  duration: FLAP_MOVE_DURATION,
  delay: FLAP_MOVE_DELAY,
  ease: OPEN_EASE,
}

/** Hero reveal starts when flap movement completes — derived from animation timings */
export const HERO_REVEAL_DELAY =
  GLOW_DURATION + FLAP_MOVE_DELAY + FLAP_MOVE_DURATION

export const MOBILE_MAX_WIDTH = 767
