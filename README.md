# Design System Starter — 5 Personalities, 1 Foundation

Ein komplettes Design-System für Websites, die **nicht alle gleich aussehen sollen**. Basierend auf 5 Referenz-Websites aus dem Musik/Event-Bereich, extrahiert in 5 eindeutige Design-Persönlichkeiten mit gemeinsamer technischer Basis.

---

## 🎯 Was du bekommst

| Datei | Zweck |
|-------|-------|
| `design-tokens.yaml` | **Source of Truth** — Alle Design-Decisions (Farben, Typo, Spacing, Radius, Shadows, Motion, Components) als YAML. Mensch- & maschinenlesbar. |
| `tailwind.config.js` | **Tailwind Config** — Liest die Tokens, generiert alle Utilities. Multi-Theme via `data-theme` Attribut. |
| `demo.html` | **Live Demo** — Öffne im Browser. Theme-Switcher oben rechts, Dark Mode Toggle links. Alle Komponenten in allen 5 Themes sichtbar. |
| `component-specs.md` | **Spezifikation** — Detaillierte Docs zu jeder Komponente: Variants, States, Responsive, A11y, Dark Mode, Handoff-Checkliste. |

---

## 🎨 Die 5 Themes (Persönlichkeiten)

| Theme | Vibe | Inspiriert von | Best For |
|-------|------|---------------|----------|
| **Editorial Luxury** | High-end, magazinartig, emotional, video-first | `isabell-beer.com` | Premium Hochzeitssänger:innen, Event-Agenturen, Luxus-DL, Personal Brands |
| **Warm Approachable** | Persönlich, vertrauensvoll, klar, FAQ-first | `anni-singt.de` | Lokale Dienstleister:innen, Berater:innen, Coaches, Handwerk, Praxis-Websites |
| **Organic Soft** | Natürlich, fließend, nicht viereckig, Wellness-Crossover | `sitashakti-music.de` | Yoga/Meditation, Ganzheitliche Gesundheit, Akustik-Musik, Natur-Produkte |
| **Futurist Minimal** | Scharf, reduktiv, experimentell, Japanese aesthetic | `michiinjapan.de` | Künstler-Portfolios, Architektur, Design-Agenturen, Tech-Startups, Fotografie |
| **Quiet Luxury** | Monochrom, zurückhaltend, staggered, timeless | Easy Pie (Screenshot) | High-End Events, Boutique Hotels, Luxus-Immobilien, Exklusive DL |

---

## 🚀 Quick Start

### 1. Repository klonen / Ordner öffnen
```bash
cd design-system-starter
```

### 2. Demo anschauen
```bash
# Einfach im Browser öffnen
open demo.html
# oder
xdg-open demo.html
```
- **Theme-Switcher** oben rechts: Klick durch alle 5 Themes
- **Dark Mode Toggle** oben links: Light/Dark pro Theme
- Alle Komponenten: Colors, Typography, Buttons, Forms, Cards, Nav, Hero, Badges, Spacing, Shadows

### 3. Für dein Projekt: Theme wählen & anpassen

```yaml
# In design-tokens.yaml → themes.<dein-theme> anpassen:
# - Primärfarbe feintunen (Hue/Sättigung in primitive scales)
# - Fonts tauschen (gleiche Kategorie: Serif/Sans/Display)
# - Radius/Shadow "Persönlichkeit" justieren
```

### 4. Tailwind nutzen

```bash
npm install -D tailwindcss @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

```css
/* src/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Theme als CSS Variable setzen (oder via JS) */
:root { --theme: editorial-luxury; }
```

```html
<!-- HTML: Theme aktivieren -->
<html data-theme="editorial-luxury">
<!-- oder für Dark Mode -->
<html data-theme="editorial-luxury" class="dark">
```

### 5. Komponenten kopieren

Aus `demo.html` die gewünschten Components extrahieren — sie nutzen **nur CSS Variables**, funktionieren also ohne Tailwind auch in vanilla HTML/CSS, React, Vue, Svelte, Astro, etc.

---

## 🏗️ Architektur

```
┌─────────────────────────────────────────────────────────────┐
│                    design-tokens.yaml                         │
│  (Single Source of Truth — YAML, versionierbar, reviewbar)   │
└─────────────────────┬───────────────────────────────────────┘
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
┌─────────────────────┐  ┌─────────────────────┐
│  tailwind.config.js │  │     demo.html       │
│  (Build-time)       │  │  (Runtime / Demo)   │
│  - Liest YAML       │  │  - CSS Variables    │
│  - Generiert Utils  │  │  - Theme Switcher   │
│  - Multi-Theme      │  │  - Dark Mode        │
└─────────────────────┘  └─────────────────────┘
          │                       │
          └───────────┬───────────┘
                      ▼
         ┌─────────────────────┐
         │  Dein Projekt       │
         │  - Kopiere Tokens   │
         │  - Nutze Utils      │
         │  - Passe an         │
         └─────────────────────┘
```

---

## 🎨 Theme-Anpassung Guide

### Primärfarbe ändern
In `design-tokens.yaml` → `themes.<theme>.color.primitive.<scale>`:
```yaml
# Beispiel: Editorial Luxury → andere Rose-Nuance
rose:
  500: "#e84d6a"  # Neuer Primary-Hue
  600: "#d13a55"
  700: "#b03048"
```
Dann `tailwind.config.js` neu laden oder CSS Variables in `demo.html` manuell updaten.

### Fonts tauschen
```yaml
fonts:
  heading: "Deine Display Font, serif/sans"
  body: "Deine Body Font, sans-serif"
  mono: "Deine Mono Font, monospace"
```
Wichtig: **Max 2 Font Families** (Heading + Body). In `demo.html` Google Fonts Link updaten.

### Radius-Persönlichkeit
```yaml
radius:
  sm: 4    # Sharp → Futurist
  md: 8
  lg: 16   # Rounded → Organic/Quiet
  xl: 24
  2xl: 32
```

### Shadow-Charakter
```yaml
shadows:
  sm: "0 1px 2px rgba(...)"
  md: "0 4px 12px rgba(...), 0 2px 4px rgba(...)"  # Weich → Editorial/Warm
  lg: "0 12px 28px rgba(...)"                       # Definiert → Futurist
  xl: "0 24px 48px rgba(...)"                       # Dramatisch → Quiet/Editorial
```

---

## ♿ Accessibility Built-In

- ✅ **WCAG AA** Kontraste (alle Token-Combos geprüft)
- ✅ **Focus Visible** auf allen interaktiven Elementen
- ✅ **Keyboard Navigation** (Tab, Enter, Space, Escape, Arrows)
- ✅ **Semantic HTML** in Demo & Specs
- ✅ **Reduced Motion** Support (`prefers-reduced-motion`)
- ✅ **Touch Targets** ≥ 44×44px
- ✅ **Dark Mode** konform (kein reines Schwarz, reduzierter Kontrast)
- ✅ **Zoom 200%** ohne Horizontal Scroll

---

## 🌙 Dark Mode

Automatisch pro Theme berechnet:
- Background → `surface-raised` (nicht `#000`)
- Text → `neutral-50` / `neutral-300` / `neutral-500`
- Borders → invertierte Skala (`neutral-700` / `neutral-600`)
- Primary → `primary-400` (aufgehellt)
- Shadows → subtile Borders/Glows

**Aktivierung:** `class="dark"` auf `<html>` oder Wrapper. Persistiert in `localStorage`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Container Padding |
|------------|-------|-------------------|
| sm | 640px | 16px |
| md | 768px | 24px |
| lg | 1024px | 32px |
| xl | 1280px | 32px |
| 2xl | 1536px | 32px |

**Mobile First** — alle Utilities `min-width`.

---

## 🧩 Komponenten-Übersicht

| Komponente | Variants | States | Responsive | Dark Mode |
|------------|----------|--------|------------|-----------|
| Button | Primary, Secondary, Ghost, Destructive | 6 | 4 Sizes | ✅ |
| Input/Textarea/Select | — | 6 | Full width mobile | ✅ |
| Card | Basic, Interactive, Featured | 3 | Grid 1/2/3 col | ✅ |
| Navigation | Desktop, Mobile Sheet | — | Breakpoint switch | ✅ |
| Hero | Centered, Split, Video, Minimal | — | Layout shift | ✅ |
| Badge | 7 Semantic variants | — | — | ✅ |
| Toast | 4 Types | — | Position shift | ✅ |
| Modal | 4 Sizes | — | Sheet on mobile | ✅ |
| Table | — | Hover/Selected | Card layout mobile | ✅ |
| Empty State | — | — | — | ✅ |
| Loading | Skeleton, Spinner, Progress | — | — | ✅ |

---

## 📦 In echtes Projekt integrieren

### Option A: Tailwind (Empfohlen)
```bash
npm install -D tailwindcss @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
# tailwind.config.js ins Projekt kopieren, Pfade anpassen
```

### Option B: CSS Variables Only (Framework-agnostisch)
```html
<!-- In <head> -->
<style>
  /* Copy :root + [data-theme] blocks from demo.html */
</style>
<!-- Components nutzen var(--color-primary), var(--radius-md), etc. -->
```

### Option C: Design Tokens → Figma / Style Dictionary
```bash
npm install -D style-dictionary
# design-tokens.yaml → Style Dictionary → Figma Tokens, CSS, iOS, Android, etc.
```

---

## 🔧 Weiterentwicklung

### Neues Theme hinzufügen
1. In `design-tokens.yaml` unter `themes:` neuen Block anlegen (Vorlage: bestehende Themes)
2. In `tailwind.config.js` wird es automatisch erkannt (Theme-Variant Plugin)
3. In `demo.html` CSS Variables Block + `themeInfo` Objekt ergänzen
4. Theme-Switcher Button hinzufügen

### Token-Änderung workflow
```
design-tokens.yaml bearbeiten
    │
    ▼
tailwind.config.js neu starten (oder CSS Variables in demo.html updaten)
    │
    ▼
demo.html prüfen → component-specs.md updaten falls nötig
    │
    ▼
In Projekt pullen / neu builden
```

---

## 📚 Referenzen & Credits

Design-Analyse basierend auf:
- **isabell-beer.com** — Editorial Luxury, Video-First, Conversion-Optimiert
- **anni-singt.de** — Warm Approachable, FAQ-First, Vertrauens-Aufbau
- **sitashakti-music.de** — Organic Soft, Wellness-Crossover, Non-Boxy
- **michiinjapan.de** — Futurist Minimal, Japanese Aesthetic, Portfolio
- **Easy Pie** (Screenshot) — Quiet Luxury, Monochrome Mauve, Staggered Layout

Methodik: **afrexai-ui-design-system** Skill (Phase 1-10: Brief → IA → Foundation → Components → Interaction → Responsive → A11y → Review → Handoff → Advanced)

---

## 📄 Lizenz

MIT — Frei für kommerzielle & private Projekte. Attribution appreciated aber nicht required.

---

## 🤝 Nächste Schritte für dich

1. **`demo.html` öffnen** → Alle 5 Themes durchklicken, Dark Mode testen
2. **Theme wählen** → Welche Persönlichkeit passt zu deinem ersten Projekt?
3. **`design-tokens.yaml` anpassen** → Primärfarbe, Fonts, Radius feintunen
4. **Tailwind setupen** → `npm install`, Config kopieren, Build starten
5. **Erste Seite bauen** → Hero + Nav + 3 Cards + Footer aus `demo.html` kopieren

---

**Viel Spaß beim Bauen!** 🎉

*Fragen? Einfach fragen — ich helfe beim Anpassen, Komponenten-Erweitern, oder beim ersten echten Projekt-Setup.*