# Wedding Invitation — Project Brief

## Overview

Interactive luxury Arabic RTL wedding invitation website for **مصطفى & راما**. Single-page experience focused on visual quality, romantic tone, and smooth micro-interactions. No backend, no personalized invite links, no guest names from URL.

**Status:** Intro concept approved. Awaiting approval to begin coding.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18+ |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Arabic luxury pair (see Design System) |

---

## Design Direction

**Mood:** Bright, premium, romantic Arabic wedding — never dark or heavy.

**Palette:**

| Token | Role | Suggested value |
|-------|------|-----------------|
| `--ivory` | Page background | `#FAF8F5` |
| `--cream` | Card surfaces | `#F5F0E8` |
| `--pearl` | Elevated panels | `#FFFCF9` |
| `--champagne` | Ornaments, borders, highlights | `#C9A962` |
| `--gold-light` | Soft gold glow | `#E8D5A3` |
| `--royal-purple` | Primary accent | `#5B3A7A` |
| `--lavender` | Watercolor wash | `#D4C4E8` |
| `--lavender-soft` | Background tints | `#EDE6F5` |
| `--navy-leaf` | Botanical detail | `#2C4A6E` |
| `--rose-white` | Floral highlights | `#FFF5F5` |
| `--seal-red` | Wax seal | `#8B1E2F` |
| `--text-primary` | Body copy | `#3D2E4A` |
| `--text-muted` | Secondary text | `#7A6B8A` |

**Visual elements:**

- Ivory / cream / pearl white backgrounds (**no black or dark backgrounds**)
- Champagne gold ornaments and golden lantern motifs
- Royal purple accents and soft lavender watercolor washes
- White roses and purple flowers (corner PNG assets)
- Subtle navy leaves
- Elegant Arabic arch frame around hero content
- Soft luxury shadows (`box-shadow` with low opacity gold/purple tints)

**Typography:**

- **Display / names / verse:** `Amiri` or `Scheherazade New` — elegant serif
- **Body / UI / hints:** `Tajawal` or `Cairo` — clean, readable Arabic sans-serif
- RTL globally via `dir="rtl"` on `<html>` and Tailwind `rtl:` utilities where needed

---

## Content

### Couple

**مصطفى & راما**

### Wax Seal Monogram

**م & ر** (rendered in code over `wax-seal.png`)

### Intro — Envelope Text (on closed envelope)

- أنت مدعو لحضور
- حفل زفاف
- مصطفى & راما

### Intro — Hint (below envelope)

**اضغط على الختم لفتح الدعوة**

Small, elegant, muted text. Not a button.

### Intro — Rising Card Text (short; full verse in Hero only)

1. بسم الله الرحمن الرحيم
2. وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنْفُسِكُمْ أَزْوَاجًا...
3. مصطفى & راما

### Quranic Verse — Full (Hero Section only)
> وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنْفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً

### Hero Subtitle

نتشرف بدعوتكم لحضور حفل زفافنا

### Welcome Text

لفرحنا اليوم ندعوكم، بالطيب والورد نلاقيكم، وبالحب والخير نشكر تهانيكم

### Event 1 — غداء الزفاف

| Field | Value |
|-------|-------|
| Date | الخميس 9/7/2026 |
| Location | منطقة سحاب - الفيصلية |
| Groom's father | والدي الحبيب: السيد محمد محمود موسى جرادات |
| Bride's father | والد العروس: السيد طالب عبدالله صالح البلوي |

### Event 2 — حفل الزفاف

| Field | Value |
|-------|-------|
| Date | الجمعة 10/7/2026 |
| Location | قاعات مؤتة للمناسبات |
| Time | الساعة 5:30 مساءً |

### Countdown Target

`2026-07-10T17:30:00` (Asia/Riyadh)

### Main Actions (only two)

1. **تأكيد الحضور** — opens RSVP modal; submit builds WhatsApp message (no backend)
2. **إضافة إلى التقويم** — Google Calendar link for wedding event

---

## Intro Screen — Approved Concept

### Interaction

- **Primary opener:** Red wax seal (clickable). **No large "افتح الدعوة" button.**
- **Hint below envelope:** `اضغط على الختم لفتح الدعوة` — small, elegant, non-interactive text.
- Seal shows subtle idle pulse + champagne gold glow on hover/tap.
- On click, runs the cinematic open sequence, then transitions to Hero.

### Visual Scene (idle)

Full-screen cinematic opening:

| Layer | Implementation |
|-------|----------------|
| Ivory / cream background | CSS + Tailwind |
| Paper texture | `textures/paper-grain.png` overlay |
| Soft lavender watercolor | CSS gradients (optional `lavender-wash.png` later) |
| Champagne gold ornaments | CSS / optional `gold-divider.svg` |
| Corner florals | `florals/corner-florals.png` (mirrored for corners) |
| Golden lanterns (L/R) | `lanterns/lantern-gold.png` (mirrored for right side) |
| Soft gold particles | CSS + Framer Motion (optional flake PNGs later) |
| Luxury envelope | CSS layers (body, pocket, flap) |
| Wax seal | `wax-seal.png` + monogram text overlay |

### Hybrid Asset Strategy

**Built in code (CSS + Framer Motion):**

- Envelope body, pocket, and flap
- Invitation card (rising from envelope)
- Gold particles and glow effects
- All animations and state transitions
- Monogram text on seal
- Lavender washes (CSS fallback)

**External PNG/SVG (premium details only):**

| Asset | Path | Phase |
|-------|------|-------|
| Wax seal | `public/assets/intro/wax-seal.png` | **Required** |
| Corner florals | `public/assets/intro/florals/corner-florals.png` | **Required** |
| Golden lantern | `public/assets/intro/lanterns/lantern-gold.png` | **Required** |
| Paper grain | `public/assets/intro/textures/paper-grain.png` | **Required** |
| Gold divider | `public/assets/intro/ornaments/gold-divider.svg` | Optional (later) |
| Gold flake 1 | `public/assets/intro/particles/gold-flake-1.png` | Optional (later) |
| Gold flake 2 | `public/assets/intro/particles/gold-flake-2.png` | Optional (later) |
| Lavender wash | `public/assets/intro/lavender-wash.png` | Optional (later) |

### Asset Folder Structure

```
public/assets/intro/
├── wax-seal.png
├── florals/
│   └── corner-florals.png
├── lanterns/
│   └── lantern-gold.png
├── textures/
│   └── paper-grain.png
├── ornaments/
│   └── gold-divider.svg          # optional, later
└── particles/
    ├── gold-flake-1.png          # optional, later
    └── gold-flake-2.png          # optional, later
```

### Animation Sequence (after seal click)

**Target total duration: 5.0–5.5 seconds** (elegant, premium, not too long).

| Step | Action | Duration | Cumulative |
|------|--------|----------|------------|
| 0 | Scene visible: ivory BG, florals, lanterns, particles, envelope, seal pulse | — | 0 s |
| 1 | User clicks wax seal — seal presses slightly (`scale ~0.92`) | 0.20 s | 0.20 s |
| 2 | Gold glow burst behind seal | 0.35 s | 0.55 s |
| 3 | Envelope flap opens upward (`rotateX`, luxury easing) | 0.75 s | 1.30 s |
| 4 | Invitation card slides upward from envelope | 0.90 s | 2.20 s |
| 5 | Card text stagger fade-in (Bismillah → short verse → names) | 1.10 s | 3.30 s |
| 6 | Brief hold on revealed card | 0.70 s | 4.00 s |
| 7 | Intro fades out; Hero fades in (crossfade) | 1.00 s | **~5.0 s** |

**Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` — no bouncy/cartoon springs.

**Reduced motion:** Skip particles and shorten to fade-only transition (~2 s).

**State machine:**

```
idle → sealPressed → flapOpening → cardRising → textRevealing → hold → exitToHero
```

---

## Page Sections & Flow

```
┌─────────────────────────────────────┐
│  1. Intro Screen                    │
│     Cinematic envelope + wax seal   │
│     Hint: اضغط على الختم لفتح الدعوة │
└─────────────────┬───────────────────┘
                  │ seal click (~5 s)
                  ▼
┌─────────────────────────────────────┐
│  2. Hero                            │
│     Full verse, names, subtitle,    │
│     welcome text, arch frame        │
├─────────────────────────────────────┤
│  3. Event Details Cards             │
│     Lunch + Wedding ceremony        │
├─────────────────────────────────────┤
│  4. Countdown                       │
│     To 2026-07-10 17:30             │
├─────────────────────────────────────┤
│  5. Location                        │
│     Venue info / map placeholder    │
├─────────────────────────────────────┤
│  6. RSVP Modal (triggered by btn)   │
│     Name, guests, yes/no, notes     │
│     → WhatsApp on submit            │
├─────────────────────────────────────┤
│  7. Footer                          │
│     Blessing / couple initials      │
└─────────────────────────────────────┘
```

---

## RSVP Modal

**Trigger:** Button labeled **تأكيد الحضور** only (not "إرسال عبر واتساب" in UI).

**Fields:**

| Field | Type | Notes |
|-------|------|-------|
| الاسم الكامل | text | required |
| عدد الحضور | number | min 1 |
| هل ستحضر؟ | radio | نعم / لا |
| ملاحظات اختيارية | textarea | optional |

**Submit behavior:** Compose WhatsApp URL with pre-filled Arabic confirmation message and open in new tab. No server persistence.

---

## Add to Calendar

Generate Google Calendar URL for **حفل الزفاف** (primary event):

- Title: حفل زفاف مصطفى & راما
- Start: 2026-07-10 17:30 (Asia/Riyadh)
- Location: قاعات مؤتة للمناسبات
- Description: wedding details from `weddingData.js`

---

## Project Structure

```
wedding-invitation/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── PROJECT_BRIEF.md
├── TODO.md
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── intro/
│           ├── wax-seal.png
│           ├── florals/corner-florals.png
│           ├── lanterns/lantern-gold.png
│           ├── textures/paper-grain.png
│           ├── ornaments/gold-divider.svg
│           └── particles/gold-flake-1.png, gold-flake-2.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── weddingData.js
    ├── styles/
    │   └── designTokens.js
    ├── components/
    │   ├── intro/
    │   │   ├── IntroScreen.jsx       # Orchestrator + state machine
    │   │   ├── IntroBackground.jsx   # BG, texture, florals, lanterns, particles
    │   │   ├── Envelope.jsx          # Body + flap (CSS layers)
    │   │   ├── WaxSeal.jsx           # Seal PNG + monogram + click/hover
    │   │   ├── InvitationCard.jsx    # Rising card + staggered text
    │   │   └── introAnimations.js    # Timing constants + easing
    │   ├── hero/
    │   │   ├── HeroSection.jsx
    │   │   └── ArabicArchFrame.jsx
    │   ├── events/
    │   │   ├── EventDetails.jsx
    │   │   └── EventCard.jsx
    │   ├── countdown/
    │   │   └── CountdownSection.jsx
    │   ├── location/
    │   │   └── LocationSection.jsx
    │   ├── rsvp/
    │   │   └── RsvpModal.jsx
    │   ├── actions/
    │   │   ├── ActionButtons.jsx
    │   │   └── addToCalendar.js
    │   ├── layout/
    │   │   └── Footer.jsx
    │   └── ui/
    │       ├── Modal.jsx
    │       └── Button.jsx
    ├── hooks/
    │   └── useCountdown.js
    └── utils/
        └── whatsapp.js
```

---

## Component Responsibilities

| Component | Responsibility |
|-----------|----------------|
| `IntroScreen` | Full-screen cinematic intro; wax seal opens invitation; exits to Hero |
| `IntroBackground` | Paper grain, lavender wash, florals, lanterns, gold particles |
| `Envelope` | Ivory/pearl envelope body + animated flap (CSS 2.5D) |
| `WaxSeal` | Clickable seal PNG, monogram, hover glow, press animation |
| `InvitationCard` | Card slide-up + staggered short text reveal |
| `introAnimations.js` | Shared timing (5–5.5 s total), easing, state constants |
| `HeroSection` | **Full** Quranic verse, names, subtitle, welcome; arch frame |
| `EventDetails` | Two cards for lunch and ceremony |
| `CountdownSection` | Live countdown to ceremony datetime |
| `LocationSection` | Venue names, optional static map embed or styled address block |
| `ActionButtons` | Only **تأكيد الحضور** and **إضافة إلى التقويم** |
| `RsvpModal` | Form + WhatsApp redirect on submit |
| `Footer` | Closing line, decorative minimal footer |
| `weddingData.js` | Single source of truth for all copy and config |

---

## Constraints (Out of Scope)

- No backend or database
- No personalized invite URLs
- No guest name from query params
- No black or dark backgrounds
- No large "افتح الدعوة" button on intro
- No extra CTA buttons beyond the two specified (RSVP + Calendar)
- No admin panel or RSVP storage
- No full Quranic verse on the small rising intro card

---

## Deployment Target

Static hosting (Vercel, Netlify, or GitHub Pages) — build output from `vite build`.

---

## Approval Gate

- [x] Project structure approved
- [x] Intro concept approved (wax seal, timing, assets, card text)
- [ ] **Coding approval** — begin implementation after explicit go-ahead

After coding approval, work proceeds in `TODO.md` order: scaffold → intro assets placeholders → intro build → remaining sections → polish → deploy.
