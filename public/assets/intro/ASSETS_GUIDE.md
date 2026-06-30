# Intro Assets Guide

Organized asset paths for the wedding invitation intro and hero. All paths are served from Vite `public/` and referenced as root-relative URLs (for example `/assets/intro/seal/wax-seal-mr.png`).

---

## Folder Structure

```
public/assets/intro/
├── ASSETS_GUIDE.md
├── textures/
│   └── paper-grain.png
├── lanterns/
│   └── lantern-gold.png
├── florals/
│   ├── floral-corner-top-left.png
│   ├── floral-corner-bottom-right.png
│   └── purple-accent-flower.png
├── seal/
│   └── wax-seal-mr.png
├── particles/          (optional — future)
└── ornaments/          (optional — future)
```

---

## Required Assets (Intro)

### 1. `textures/paper-grain.png`

| | |
|---|---|
| **Path** | `/assets/intro/textures/paper-grain.png` |
| **Type** | PNG (tileable) |
| **Transparent** | No |

**Purpose:** Subtle ivory paper texture overlay for the background and envelope surface.

**Usage:** Full-screen overlay at **8–12% opacity**. Gives a premium printed-paper feel without distracting from text or the seal.

---

### 2. `lanterns/lantern-gold.png`

| | |
|---|---|
| **Path** | `/assets/intro/lanterns/lantern-gold.png` |
| **Type** | PNG |
| **Transparent** | Yes |

**Purpose:** Premium golden lantern for decorative use and a later scroll-based glow effect.

**Usage (closed intro):** Hidden or placed very subtly at the top-right edge. Must not block the envelope or wax seal. **Do not** replace with simplified shapes — use this image only.

---

### 3. `florals/floral-corner-top-left.png`

| | |
|---|---|
| **Path** | `/assets/intro/florals/floral-corner-top-left.png` |
| **Type** | PNG |
| **Transparent** | Yes |

**Purpose:** Floral decoration for the top-left corner, used **subtly** behind the envelope.

**Usage:** Low opacity (~30–40%), small scale on mobile. Must not overpower the full-screen envelope.

---

### 4. `florals/floral-corner-bottom-right.png`

| | |
|---|---|
| **Path** | `/assets/intro/florals/floral-corner-bottom-right.png` |
| **Type** | PNG |
| **Transparent** | Yes |

**Purpose:** Floral decoration for the bottom-right corner, used **subtly** for visual balance.

**Usage:** Same restraint as top-left. Stays behind content; must not cover the seal or hint text.

---

### 5. `florals/purple-accent-flower.png`

| | |
|---|---|
| **Path** | `/assets/intro/florals/purple-accent-flower.png` |
| **Type** | PNG |
| **Transparent** | Yes |

**Purpose:** Small premium strong-purple accent flower for a **later hero reveal animation** — not used on the closed-envelope intro.

**Usage:** Reserved for envelope-open → hero transition (future phase).

---

### 6. `seal/wax-seal-mr.png`

| | |
|---|---|
| **Path** | `/assets/intro/seal/wax-seal-mr.png` |
| **Type** | PNG |
| **Transparent** | Yes |

**Purpose:** Red wax seal with **M & R** monogram. Placed at the center where envelope flaps meet. **Main clickable opener** for the invitation.

**Usage:** ~80–95 px on mobile. Idle pulse, tap-ready. Hint below: `اضغط على الختم لفتح الدعوة`.

---

## Ignored / Invalid Files

Do **not** reference these in code:

| Pattern | Reason |
|---------|--------|
| `*.png.png` | Duplicate extension from bad export — moved into correct folders |
| Files in `intro/` root (except this guide) | Use organized subfolders only |

If you see leftover `*.png.png` files in the project root of `intro/`, delete them manually. Code uses **only** the six paths listed above.

---

## Optional Future Assets

| File | Folder | Purpose |
|------|--------|---------|
| `gold-flake-1.png` | `particles/` | Falling gold particle variant |
| `gold-flake-2.png` | `particles/` | Second particle variant |
| `gold-divider.svg` | `ornaments/` | Gold divider between Arabic sections |

If missing, skip gracefully — no placeholder shapes in code.

---

## Implementation Rules

1. Reference assets only via paths in `src/data/introConfig.js`.
2. If an asset fails to load, log `[Intro] Missing asset: …` to the console and skip that element.
3. Never substitute missing assets with circles, CSS blobs, or fake florals.
4. Replace any PNG that shows a baked-in checkerboard with a true transparent export.

---

## Checklist

| Asset | Status |
|-------|--------|
| `textures/paper-grain.png` | ✓ In repo |
| `lanterns/lantern-gold.png` | ✓ In repo |
| `florals/floral-corner-top-left.png` | ✓ In repo |
| `florals/floral-corner-bottom-right.png` | ✓ In repo |
| `florals/purple-accent-flower.png` | ✓ In repo (hero phase) |
| `seal/wax-seal-mr.png` | ✓ In repo |
