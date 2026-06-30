# Wedding Invitation — TODO

> Status: **Intro direction approved** — docs updated. Awaiting coding approval before implementation.

---

## Phase 0 — Planning

- [x] Write `PROJECT_BRIEF.md`
- [x] Write `TODO.md` with task breakdown
- [x] User approval of project structure
- [x] Intro concept review and approval (wax seal, timing, assets, card text)
- [x] Update `PROJECT_BRIEF.md` with approved intro direction
- [x] Update `TODO.md` with intro build tasks
- [ ] **User approval to begin coding**

---

## Phase 1 — Project Scaffold

- [ ] Setup React + Vite
- [ ] Setup Tailwind CSS
- [ ] Setup Framer Motion
- [ ] Setup Lucide React
- [ ] Add Arabic fonts (Google Fonts: Amiri + Tajawal)
- [ ] Set RTL globally (`dir="rtl"`, `lang="ar"`)
- [ ] Create `public/assets/intro/` folder structure
- [ ] Add placeholder PNGs for required intro assets (swap with final art later):
  - [ ] `wax-seal.png`
  - [ ] `florals/corner-florals.png`
  - [ ] `lanterns/lantern-gold.png`
  - [ ] `textures/paper-grain.png`

---

## Phase 2 — Foundation

- [ ] Create `src/data/weddingData.js` (all content, dates, intro copy, WhatsApp placeholder)
- [ ] Create design system colors in `tailwind.config.js` + CSS variables in `index.css`
- [ ] Create `src/components/intro/introAnimations.js` (5–5.5 s timing, easing, states)
- [ ] Create shared UI primitives (`Button`, `Modal`)
- [ ] Create `src/utils/whatsapp.js` (message builder)
- [ ] Create `src/components/actions/addToCalendar.js` (Google Calendar URL)
- [ ] Preload critical intro assets in `index.html`

---

## Phase 3 — Intro Screen (priority after scaffold)

Build hybrid intro: CSS + Framer Motion for structure/animation; PNG assets for premium details.

### Background & atmosphere

- [ ] `IntroBackground.jsx` — ivory/cream full-screen base
- [ ] Paper grain overlay (`textures/paper-grain.png`)
- [ ] Soft lavender watercolor (CSS gradients)
- [ ] Corner florals (`florals/corner-florals.png`, mirrored)
- [ ] Golden lanterns L/R (`lanterns/lantern-gold.png`, mirrored)
- [ ] Soft gold particles (CSS + Framer Motion; optional flake PNGs later)

### Envelope & seal

- [ ] `Envelope.jsx` — ivory/pearl body, gold borders, paper texture (CSS layers)
- [ ] Envelope flap — separate layer, opens upward via `rotateX`
- [ ] Envelope front text: أنت مدعو لحضور / حفل زفاف / مصطفى & راما
- [ ] `WaxSeal.jsx` — `wax-seal.png` + monogram **م & ر** (code overlay)
- [ ] Seal idle pulse + gold hover glow
- [ ] Hint text below envelope: **اضغط على الختم لفتح الدعوة** (small, not a button)
- [ ] No large **افتح الدعوة** button

### Card reveal & transition

- [ ] `InvitationCard.jsx` — cream/pearl card, slides up from envelope
- [ ] Staggered card text fade-in:
  - [ ] بسم الله الرحمن الرحيم
  - [ ] وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنْفُسِكُمْ أَزْوَاجًا... (truncated)
  - [ ] مصطفى & راما
- [ ] **Do not** show full verse on intro card (full verse lives in Hero)
- [ ] `IntroScreen.jsx` — state machine orchestrating full sequence
- [ ] Animation timing: **~5.0–5.5 s** total after seal click
- [ ] Crossfade transition from intro to Hero

### Intro animation checklist (sequence)

- [ ] Scene appears (idle: BG, florals, lanterns, particles, envelope)
- [ ] Seal press on click (~0.20 s)
- [ ] Gold glow (~0.35 s)
- [ ] Flap opens upward (~0.75 s)
- [ ] Card slides up (~0.90 s)
- [ ] Text stagger fade-in (~1.10 s)
- [ ] Brief hold (~0.70 s)
- [ ] Intro out + Hero in (~1.00 s)
- [ ] `prefers-reduced-motion` fallback

---

## Phase 4 — Main Sections (after intro)

- [ ] Build Hero Section (`HeroSection.jsx` + `ArabicArchFrame.jsx`) — **full** Quranic verse here
- [ ] Build Event Details cards (`EventDetails.jsx`, `EventCard.jsx`)
- [ ] Build Countdown (`CountdownSection.jsx` + `useCountdown.js`)
- [ ] Build Location section (`LocationSection.jsx`)
- [ ] Build RSVP modal (`RsvpModal.jsx`)
- [ ] Build Footer (`Footer.jsx`)
- [ ] Wire `App.jsx` — intro → hero → sections, modal state
- [ ] Add only two main buttons (`ActionButtons.jsx`): تأكيد الحضور + إضافة إلى التقويم

---

## Phase 5 — Polish

- [ ] Replace placeholder intro PNGs with final artwork (if available)
- [ ] Optional later assets:
  - [ ] `ornaments/gold-divider.svg`
  - [ ] `particles/gold-flake-1.png`
  - [ ] `particles/gold-flake-2.png`
  - [ ] `lavender-wash.png`
- [ ] Framer Motion polish on hero section reveals and RSVP modal
- [ ] Polish mobile design (responsive typography, touch targets, card text sizing)
- [ ] Accessibility pass (seal focus/aria, focus trap in modal, reduced motion)
- [ ] Performance: particle count reduction on mobile, asset compression

---

## Phase 6 — Deploy

- [ ] Production build (`vite build`)
- [ ] Deploy to static host
- [ ] Smoke test on mobile (RTL, seal tap, intro timing, WhatsApp link, calendar link)

---

## Config Notes (fill before RSVP goes live)

| Item | Placeholder | Action |
|------|-------------|--------|
| WhatsApp number | `966XXXXXXXXX` in `weddingData.js` | Replace with real number |
| Map link | Optional Google Maps URL for قاعات مؤتة | Add when available |
| Timezone | `Asia/Riyadh` for countdown/calendar | Confirmed |
| Intro assets | Placeholder PNGs in Phase 1 | Replace with final art in Phase 5 |

---

## Intro Asset Reference

| File | Required | Notes |
|------|----------|-------|
| `wax-seal.png` | Yes | Deep royal red, transparent BG, monogram added in code |
| `florals/corner-florals.png` | Yes | White roses, purple flowers, navy leaves; mirror for corners |
| `lanterns/lantern-gold.png` | Yes | Champagne gold; mirror for right side |
| `textures/paper-grain.png` | Yes | Seamless ivory tile, low opacity overlay |
| `ornaments/gold-divider.svg` | Optional | Thin arabesque gold line |
| `particles/gold-flake-1.png` | Optional | Irregular gold speck |
| `particles/gold-flake-2.png` | Optional | Second flake variant |
| `lavender-wash.png` | Optional | CSS gradient is primary fallback |

---

## Dependency Checklist (package.json)

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "vite": "^5.x",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x"
  }
}
```

---

## File Creation Order (after coding approval)

1. Vite scaffold + Tailwind + fonts + RTL
2. `public/assets/intro/` structure + placeholder assets
3. `src/index.css` + `tailwind.config.js` + `weddingData.js`
4. `introAnimations.js` + intro subcomponents (`IntroBackground` → `Envelope` → `WaxSeal` → `InvitationCard` → `IntroScreen`)
5. `App.jsx` intro → hero handoff
6. Hero and remaining sections
7. Polish + optional assets + deploy
