export { HERO_REVEAL_DELAY } from './introAssets'

export const REVEAL_EASE = [0.22, 1, 0.36, 1]

export const HERO_REVEAL_DURATION = 1.4
export const ENVELOPE_FADE_DURATION = 1.1

export const HERO_REVEAL_TRANSITION = {
  duration: HERO_REVEAL_DURATION,
  ease: REVEAL_EASE,
}

export const ENVELOPE_FADE_TRANSITION = {
  duration: ENVELOPE_FADE_DURATION,
  ease: REVEAL_EASE,
}

export const HERO_INITIAL = { opacity: 0, scale: 0.92, y: 24 }
export const HERO_REVEALED = { opacity: 1, scale: 1, y: 0 }

/** Stagger offsets from hero reveal start (seconds) */
export const HERO_STAGGER = {
  panel: 0,
  crest: 0.16,
  eyebrow: 0.3,
  title: 0.44,
  names: 0.6,
  body: 0.8,
  date: 0.94,
  buttons: 1.1,
  scrollHint: 1.32,
  lanterns: 0.15,
  florals: 0.1,
}

export function contentTransition(delay, duration = 0.85) {
  return { duration, delay, ease: REVEAL_EASE }
}

/** Generic on-scroll section reveal (used by ScrollReveal) */
export const SECTION_REVEAL_INITIAL = { opacity: 0, y: 30 }
export const SECTION_REVEAL_VISIBLE = { opacity: 1, y: 0 }
export const SECTION_REVEAL_TRANSITION = { duration: 0.9, ease: REVEAL_EASE }

/* ------------------------------------------------------------------ */
/* Assets                                                              */
/* ------------------------------------------------------------------ */

export const FLORAL_ASSETS = [
  '/assets/hero/florals/floral-01.png',
  '/assets/hero/florals/floral-02.png',
  '/assets/hero/florals/floral-03.png',
]

export const LANTERN_ASSET = '/assets/intro/lanterns/lantern-gold.png'

/* ------------------------------------------------------------------ */
/* Dates — not translated, shared by both languages                    */
/* ------------------------------------------------------------------ */

export const WEDDING_TARGET = '2026-07-10T17:30:00+03:00'
export const LUNCH_TARGET = '2026-07-09T15:00:00+03:00'

/** End times — used for "Add to Calendar" event blocks (estimated durations) */
export const WEDDING_END = '2026-07-10T20:30:00+03:00'
export const LUNCH_END = '2026-07-09T17:00:00+03:00'

/** Kept for backward compatibility with the main countdown */
export const COUNTDOWN_TARGET = WEDDING_TARGET

/** Maps each event-details card id to its calendar start/end window */
export const EVENT_TIMES = {
  wedding: { start: WEDDING_TARGET, end: WEDDING_END },
  lunch: { start: LUNCH_TARGET, end: LUNCH_END },
}

/* ------------------------------------------------------------------ */
/* Location links — real links provided once, shared by both languages */
/* ------------------------------------------------------------------ */

export const LOCATION_HREFS = {
  wedding: 'https://maps.app.goo.gl/5sEzHKRoNRvzos6B9?g_st=iw',
  lunch: 'https://maps.app.goo.gl/3pHyDEoMfLFQuUxP9?g_st=iw',
}
