# Component Specifications — Design System Starter

Übersicht aller Komponenten mit Varianten, States und Theme-spezifischen Werten.

---

## 📐 Foundation (Shared)

| Token | Wert | Beschreibung |
|-------|------|--------------|
| Spacing Base | 4px | Alle Spacings sind Vielfache davon |
| Radius Scale | none, sm, md, lg, xl, 2xl, full | 0 / 4 / 8 / 12 / 16 / 24 / 9999px |
| Shadow Scale | none, sm, md, lg, xl | 4 Elevation-Stufen |
| Transitions | fast (100ms), normal (200ms), slow (300ms) | ease-out default |
| Breakpoints | sm:640, md:768, lg:1024, xl:1280, 2xl:1536 | Mobile-first |
| Container | max 1280px, padding responsive | 16/24/32px |
| Touch Target | min 44×44px | Alle interaktiven Elemente |

---

## 🔘 Button

### Variants

| Variant | Use Case | Theme Differences |
|---------|----------|-------------------|
| **Primary** | Haupt-CTA (1-2 pro View) | Editorial: elegant, Warm: friendly, Organic: soft, Futurist: sharp/uppercase, Quiet: refined |
| **Secondary** | Alternative Aktionen (2-3) | Border-width: 2px (Editorial/Warm/Quiet), 1px (Futurist), 1.5px (Quiet) |
| **Ghost** | Cancel, Back, Tertiary | Kein Border, nur Hover-BG |
| **Destructive** | Delete, Remove | Immer Error-Rot |

### Sizes

| Size | Height | Padding | Font-Size | Use |
|------|--------|---------|-----------|-----|
| sm | 36px | 0.5rem 1rem | 0.75rem | Toolbar, dense UI |
| md | 44px | 0.875rem 2rem | 0.875rem | **Default** |
| lg | 52px | 1rem 2.5rem | 1rem | Hero-CTA |
| xl | 60px | 1.25rem 3rem | 1.125rem | Landing Hero |

### States (alle Variants)

| State | Visual |
|-------|--------|
| Default | Base styles |
| Hover | `translateY(-1px)` + shadow-md, BG dunkler |
| Active | `scale(0.98)` |
| Focus | `outline: 2px solid primary`, `outline-offset: 2px` |
| Disabled | `opacity: 0.5`, `cursor: not-allowed` |
| Loading | Spinner, disabled interaction |

### Theme-Spezifisch

```css
/* Editorial Luxury */
.btn-primary { padding: 14px 32px; font-weight: 500; letter-spacing: 0.02em; }

/* Warm Approachable */
.btn-primary { padding: 14px 28px; font-weight: 600; letter-spacing: 0; }

/* Organic Soft */
.btn-primary { padding: 16px 32px; font-weight: 500; letter-spacing: 0.01em; }

/* Futurist Minimal */
.btn-primary { padding: 12px 24px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }

/* Quiet Luxury */
.btn-primary { padding: 14px 32px; font-weight: 500; letter-spacing: 0.03em; }
```

---

## 📝 Form Fields

### Input / Textarea / Select

| Property | Value |
|----------|-------|
| Height | 44px (min touch target) |
| Padding | 12px 16px |
| Border | 1px solid `border` |
| Radius | `radius.md` (theme-dependent) |
| Font | body, 1rem, line-height 1.5 |
| Placeholder | `text-muted` |
| Transition | all fast |

### States

| State | Border | Shadow | Text |
|-------|--------|--------|------|
| Default | `border` | none | `text-primary` |
| Hover | `border-strong` | none | - |
| Focus | `primary` | `0 0 0 3px primary/20%` | - |
| Error | `error` | `0 0 0 3px error/20%` | `error` helper text |
| Success | `success` | `0 0 0 3px success/20%` | (optional) |
| Disabled | `border` | none | `text-muted`, BG `border` |

### Label

- Immer **über** dem Input (nicht floating)
- Font: 0.875rem, weight 500, `text-primary`
- Margin-bottom: 6px
- Optional fields: "(optional)" statt Required-Stern

### Helper / Error Text

- Unter dem Input
- Font: 0.75rem
- Error: `error` color + Icon
- Helper: `text-muted`

---

## 🃏 Card

### Variants

| Variant | Border | Shadow | Hover | Use |
|---------|--------|--------|-------|-----|
| **Basic** | 1px `border` | sm | none | Content display |
| **Interactive** | 1px `border` | sm | md + `translateY(-2px)` + `border-strong` | Clickable cards |
| **Featured** | 2px `primary` | md | lg | Highlight, "Recommended" |

### Structure

```
.card
├── .card-image (optional) — aspect-ratio 4/3, radius `radius.xl`, overflow hidden
├── .card-badge (optional) — top-right or inline
├── .card-title (h3/h4) — heading font, margin 12px 0 8px
├── .card-text — body font, text-secondary
└── .card-actions (optional) — button group, margin-top 16px
```

### Padding

| Theme | Padding | Image Radius |
|-------|---------|--------------|
| Editorial | 32px | 24px |
| Warm | 24px | 16px |
| Organic | 28px | 24px |
| Futurist | 20px | 4px |
| Quiet | 32px | 24px |

### Image Treatment

- `object-fit: cover`
- Hover: `transform: scale(1.02)` (transition slow)
- Consistent aspect ratio per layout

---

## 🧭 Navigation

### Desktop

| Property | Value |
|----------|-------|
| Height | Theme-dependent (64-88px) |
| Layout | Logo left, Links center/right, CTA right |
| Link spacing | 2rem gap |
| Link style | `text-secondary`, hover → `text-primary` |
| CTA | Primary button |
| Border | Bottom `border` (except Organic: none) |
| Backdrop | Blur (Editorial, Organic, Futurist, Quiet) |

### Mobile

- Hamburger button → Full-screen sheet (slide up)
- Sheet: Logo top, Links stacked (large touch targets), CTA full-width bottom
- Close on link click or backdrop click
- Focus trap inside sheet

### Scroll Behavior

- Sticky top
- Shrink on scroll: `height → height - 8px`, add `shadow-md`
- Smooth scroll for anchor links

---

## 🦸 Hero Section

### Variants

| Variant | Layout | Min-Height | Padding | Best For |
|---------|--------|------------|---------|----------|
| **Centered** | Text centered, CTA below | 80-100vh | Theme-dependent | Landing, Editorial |
| **Split** | Text left, Image right | 80-90vh | Theme-dependent | SaaS, Portfolio |
| **Video** | Full-bleed video, overlay text | 90-100vh | Theme-dependent | Event, Performance |
| **Minimal** | Large headline only | 60-70vh | Theme-dependent | Futurist, Quiet |

### Theme Defaults

| Theme | Min-Height | Padding Top | Padding Bottom | Style |
|-------|------------|-------------|----------------|-------|
| Editorial | 90vh | 120px | 80px | Video-first, editorial |
| Warm | 80vh | 100px | 60px | Personal, trust-building |
| Organic | 85vh | 110px | 70px | Flowing, organic shapes |
| Futurist | 100vh | 140px | 100px | Full-viewport, experimental |
| Quiet | 90vh | 120px | 80px | Staggered, refined |

### Content Structure

```
.hero
├── .hero-badge (optional) — animated entrance
├── .hero-headline — H1, max-width 800px, centered or left
├── .hero-subtext — Body large, text-secondary, max-width 600px
├── .hero-cta-group — Button group (Primary + Secondary)
└── .hero-trust (optional) — Logos, stats, social proof
```

### Animations

- Staggered entrance: badge → headline → subtext → CTA (50ms delay each)
- Respect `prefers-reduced-motion`

---

## 🏷️ Badge / Tag

### Variants

| Variant | BG | Text | Use |
|---------|-----|------|-----|
| Default | `primary-light` | `primary-dark` | Category, status |
| Secondary | `secondary-light` | `secondary-dark` | Alternative category |
| Accent | `accent` | `text-primary` | Highlight |
| Success | `success` | white | Available, confirmed |
| Warning | `warning` | white | Pending, waitlist |
| Error | `error` | white | Sold out, error |
| Info | `info` | white | New, info |

### Specs

- Padding: 4px 10px (sm), 6px 12px (md)
- Font: 0.75rem (sm), 0.8125rem (md), weight 500
- Radius: `full`
- Uppercase optional (Futurist: yes, others: no)

---

## 🍞 Toast / Notification

### Types

| Type | Icon | Color | Duration |
|------|------|-------|----------|
| Success | Check circle | `success` | 3s auto-dismiss |
| Error | X circle | `error` | Persistent (manual dismiss) |
| Warning | Alert triangle | `warning` | 5s auto-dismiss |
| Info | Info circle | `info` | 5s auto-dismiss |

### Specs

- Position: top-right (desktop), top-center (mobile)
- Max visible: 3
- Min-width: 280px, Max-width: 420px
- Padding: 14px 16px
- Radius: `radius.md`
- Shadow: `xl`
- Animation: slide-in right (300ms ease-out), fade-out (200ms ease-in)
- Structure: Icon + Title + Description (optional) + Action (optional) + Close

---

## 📋 Modal / Dialog

### Sizes

| Size | Max-Width | Use |
|------|-----------|-----|
| sm | 400px | Confirm, simple forms |
| md | 560px | Standard forms |
| lg | 720px | Complex forms, wizards |
| xl | 960px | Full-screen on mobile |

### Specs

- Padding: 24px (mobile: 16px)
- Radius: `radius.xl` (16px)
- Backdrop: `overlay` color, blur 4px
- Close: X button top-right, ESC key, backdrop click
- Focus trap: Tab cycles inside modal
- Animation: fade + scale(0.95→1) 200ms ease-out
- Mobile: Full-screen sheet (slide up from bottom)

### Structure

```
.modal
├── .modal-header — Title + Close
├── .modal-body — Content (scrollable if needed)
└── .modal-footer — Actions (right-aligned: Secondary + Primary)
```

---

## 📊 Table (Data-Heavy UIs)

### Specs

| Part | Spec |
|------|------|
| Header | BG `gray-50` / `surface`, `text-secondary`, `sm`, uppercase, tracking-wide, font-medium, sticky top |
| Row hover | BG `gray-50` / `primary-light/10%` |
| Row selected | BG `primary-light`, left border 2px `primary` |
| Cell padding | 12px 16px |
| Alignment | Left (text), Right (numbers), Center (status/actions) |
| Truncation | Ellipsis + tooltip for long content |
| Sorting | Click header, arrow indicator |
| Filtering | Above table or inline header dropdowns |
| Pagination | Bottom, 10/25/50/100 per page |
| Empty state | Illustration + message + CTA |
| Loading | Skeleton rows (not spinner) |

---

## 🎯 Empty States

**Jeder leere State braucht:**

1. **Illustration/Icon** — SVG, 80-120px, `text-muted` oder `primary-light`
2. **Headline** — Was dieser Bereich ist (H3)
3. **Description** — Warum er leer ist (Body, `text-secondary`)
4. **CTA** — Was als nächstes tun (Primary button)

```html
<div class="empty-state" style="text-align: center; padding: 4rem 2rem;">
  <svg class="empty-icon" style="width: 96px; height: 96px; color: var(--color-text-muted); margin-bottom: 1.5rem;">…</svg>
  <h3 style="margin-bottom: 0.5rem;">Keine Projekte yet</h3>
  <p style="color: var(--color-text-secondary); margin-bottom: 1.5rem; max-width: 300px; margin-left: auto; margin-right: auto;">
    Erstelle dein erstes Projekt, um loszulegen.
  </p>
  <button class="btn btn-primary">+ Neues Projekt</button>
</div>
```

---

## ⏳ Loading States

| Pattern | When | Implementation |
|---------|------|----------------|
| **Skeleton** | Content loading (cards, lists, tables) | Gray pulsing shapes matching final layout |
| **Spinner** | Short actions (<3s) | Submit button, inline save |
| **Progress** | Known duration | File upload, multi-step |
| **Optimistic** | Low-risk actions | Like, toggle, send message |
| **Placeholder** | First load | Shimmer effect on cards |

**Regel: Skeleton > Spinner** — Skeletons zeigen Struktur, reduzieren perceived wait time.

---

## ♿ Accessibility (Alle Komponenten)

### Checkliste pro Komponente

- [ ] **Kontrast** ≥ 4.5:1 (normal), ≥ 3:1 (large text, UI)
- [ ] **Fokus** sichtbar auf allen interaktiven Elementen (`focus-visible`)
- [ ] **Keyboard** bedienbar (Tab, Enter, Space, Escape, Arrows)
- [ ] **Labels** mit Inputs assoziiert (`for`/`id` oder wrapping)
- [ ] **ARIA** nur wo semantic HTML nicht reicht
- [ ] **Screen Reader** getestet (VoiceOver, NVDA)
- [ ] **Zoom 200%** funktioniert ohne horizontal scroll
- [ ] **Reduced Motion** respektiert (Animationen deaktiviert)

### Semantic HTML Mapping

| Zweck | Element | Nicht |
|-------|---------|-------|
| Page Header | `<header>` | `<div class="header">` |
| Navigation | `<nav>` | `<div class="nav">` |
| Main Content | `<main>` | `<div class="content">` |
| Section | `<section>` + `<h2>` | `<div>` |
| Card/Article | `<article>` | `<div class="card">` |
| Sidebar | `<aside>` | `<div class="sidebar">` |
| Footer | `<footer>` | `<div class="footer">` |
| Button Action | `<button>` | `<div onclick>` oder `<a href="#">` |
| Link/Nav | `<a href>` | `<button>` für Navigation |
| Liste | `<ul>`/`<ol>` | Divs mit Zeilenumbrüchen |

---

## 🌙 Dark Mode (Pro Theme)

### Universal Overrides

| Light | Dark | Regel |
|-------|------|-------|
| White BG | `neutral-950` (nicht pure black) | Pure black = Loch-Effekt |
| `text-primary` | `neutral-50` | |
| `text-secondary` | `neutral-300` | |
| `text-muted` | `neutral-500` | |
| `border` | `neutral-700` | Border-Skala invertieren |
| `surface` | `neutral-900` | |
| `surface-raised` | `neutral-800` | Leichte Erhebung vom BG |
| Shadows | Subtile Borders/Glows | Schatten auf dark BG unsichtbar |
| Primary | `primary-400` | Sättigte Farben aufhellen |

### Implementation

```css
[data-theme].dark {
  --color-background: var(--color-surface-raised);
  --color-surface: var(--color-surface-raised);
  --color-surface-raised: var(--color-border-strong);
  --color-border: var(--color-border-strong);
  --color-border-strong: var(--color-text-muted);
  --color-text-primary: #fafafa;
  --color-text-secondary: #d4d4d4;
  --color-text-muted: #a3a3a3;
  --color-overlay: rgba(0, 0, 0, 0.8);
  --color-primary: var(--color-primary-light);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4), 0 0 1px var(--color-primary) / 0.2;
  /* ... */
}
```

**Toggle:** `class="dark"` auf `<html>` oder Wrapper. Persist in localStorage.

---

## 📱 Responsive Patterns

| Component | Mobile (<640) | Tablet (640-1023) | Desktop (≥1024) |
|-----------|---------------|-------------------|-----------------|
| Navigation | Hamburger → Sheet | Sidebar collapsed | Sidebar/Topbar |
| Cards Grid | 1 col | 2 cols | 3-4 cols |
| Hero | Stacked (text over image) | Side-by-side | Side-by-side + padding |
| Form | 1 col | 1 col | 2-col für related pairs |
| Modal | Full-screen sheet | Centered | Centered |
| Table | Card layout / horiz scroll | Fewer cols visible | Full table |
| Footer | Stacked | 2-col | 4-col |

### Container Padding

- Mobile: 16px
- Tablet: 24px
- Desktop: 32px

---

## 🎬 Motion System

### Duration Scale

| Category | Duration | Easing | Use |
|----------|----------|--------|-----|
| Micro | 100ms | ease-out | Toggle, checkbox, button press |
| Meso | 200ms | ease-out | Panel slide, dropdown, tooltip |
| Macro | 300ms | ease-in-out | Page transition, modal |
| Orchestrated | 300-800ms + stagger | ease-out + 50ms delay | List loading, dashboard entry |

### Stagger

- Jedes Item verzögert 50ms zum vorherigen
- Max total delay: 300ms (6 items)

### Reduce Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📦 Handoff Checkliste (Pro Projekt)

### Design Tokens
- [ ] `design-tokens.yaml` für Projekt angepasst (Theme gewählt, Farben gefinetuned)
- [ ] `tailwind.config.js` generiert / erweitert
- [ ] CSS Variables in `:root` + `[data-theme]` + `.dark` definiert

### Components
- [ ] Alle Variants dokumentiert (Button, Card, Input, Badge, Modal, Toast, Table, Nav, Hero)
- [ ] Alle States: Default, Hover, Active, Focus, Disabled, Loading, Error
- [ ] Responsive Breakpoints definiert
- [ ] Dark Mode Variants definiert

### Assets
- [ ] Icons als SVG (nicht PNG)
- [ ] Bilder optimiert (WebP, srcset, lazy loading)
- [ ] Illustrationen als SVG wo möglich
- [ ] Favicon + Apple Touch Icon + Manifest

### Docs
- [ ] README mit Quickstart
- [ ] Changelog
- [ ] Migration Guide (falls v2+)

### Quality Gates
- [ ] Contrast Checker passed (alle Text/Background Combos)
- [ ] Keyboard Navigation getestet
- [ ] Screen Reader getestet
- [ ] Mobile Touch Targets ≥ 44×44px
- [ ] No horizontal scroll bei 320px
- [ ] Print Stylesheet basic

---

## 🚀 Quick Start: Neues Projekt

```bash
# 1. Theme wählen
# Editorial Luxury → Premium Hochzeitssängerin
# Warm Approachable → Lokale Hochzeitssängerin, Beraterin
# Organic Soft → Yoga, Wellness, Akustik
# Futurist Minimal → Portfolio, Kunst, Tech
# Quiet Luxury → High-End Events, Boutique

# 2. Tokens anpassen
# - Primärfarbe feintunen (Hue/Sättigung)
# - Fonts ggf. tauschen (gleiche Kategorie)
# - Radius/Shadow "Persönlichkeit" anpassen

# 3. Tailwind config nutzen
npm install -D tailwindcss @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

# 4. HTML Demo als Referenz öffnen
open demo.html
# Theme-Switcher testen, Dark Mode prüfen

# 5. Komponenten in Projekt kopieren
# Aus demo.html die benötigten Components extrahieren
```

---

## 📁 Dateistruktur

```
design-system-starter/
├── design-tokens.yaml      # Source of Truth (YAML)
├── tailwind.config.js      # Tailwind Config (JS, liest YAML)
├── demo.html               # Live Demo aller 5 Themes
├── component-specs.md      # Diese Datei
└── README.md               # (zu erstellen)
```

---

*Generated from 5 reference sites: isabell-beer.com, anni-singt.de, sitashakti-music.de, michiinjapan.de, Easy Pie (screenshot)*