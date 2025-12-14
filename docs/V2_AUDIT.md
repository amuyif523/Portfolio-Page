# V2 Audit & Target Board (Sprint V3-0)

**Date:** December 14, 2025
**Status:** Planning Phase for V3

## 🎯 Target Scorecard

| Metric | Current (V2) | Target (V3) | Gap Analysis |
| :--- | :---: | :---: | :--- |
| **Calmness** | 7/10 | **9/10** | Current feels "designed" but not yet "effortless". Grain and high-contrast borders add some visual friction. |
| **Hierarchy** | 8/10 | **10/10** | Hero is strong, but secondary pages/sections blend together. Needs sharper distinction between "Read" and "Scan" modes. |
| **Uniqueness** | 6/10 | **9/10** | "Creative Technologist" + Scroll is a common trope. Needs a stronger "Signature" beyond just the HyperText. |
| **Perceived Quality** | 8/10 | **10/10** | Good, but micro-interactions (hover states, cursors) need to feel "heavy" and expensive. |

---

## 📋 V2 Issues Board

### 1. Visual Noise
- [ ] **Grain Intensity**: The background grain (`opacity-20`) creates a "dirty" look on some screens rather than texture. Needs reduction or refinement.
- [ ] **Border Fatigue**: Too many 1px borders (Projects list, Footer). Consider using whitespace as a separator instead of lines.
- [ ] **Mix-Blend Mode**: The `mix-blend-difference` on the Hero title can look messy over the grain/background on mobile.

### 2. Copy Issues
- [ ] **Hero Description**: "Building high-impact technical systems..." feels a bit resume-like. Needs to be more punchy/editorial.
- [ ] **Contact CTA**: "Let's Work Together" is generic. Could be more conversational or directive.
- [ ] **Project Metadata**: The "Year — Client" format in `ProjectDetail` is functional but dry.

### 3. Motion Issues
- [ ] **HyperText Trigger**: The scramble effect on the Hero title triggers on *every* hover. It should probably trigger once or have a cooldown to avoid "flicker" annoyance.
- [ ] **Scroll Scrubbing**: The parallax on the About image (`scrub: true`) can feel "loose". Needs more damping or a tighter scroll distance.
- [ ] **Page Transitions**: Currently relies on native navigation. Needs a smoother page-to-page transition (e.g., exit animations).

### 4. Layout & Spacing
- [ ] **Mobile Rhythm**: Vertical spacing on mobile (`py-32`) might be excessive, causing too much scrolling before content appears.
- [ ] **Project List**: The project list items are very tall. On smaller screens, you only see one at a time.
- [ ] **Footer Balance**: The footer is now *too* minimal. It lacks weight to "close" the page effectively.

### 5. Section-by-Section Punch List

#### Hero
- [ ] Refine `13vw` font size (too aggressive on wide screens?).
- [ ] "View Work" link needs a more premium hover state (maybe an underline expansion?).

#### About
- [ ] Text column is a wall of text. Break it up visually or use a different layout.
- [ ] Portrait image aspect ratio (`3/4`) feels standard.

#### Projects
- [ ] Floating preview image needs a subtle blur or scale-in animation to feel less "pop-in".
- [ ] List items need a "active" state indication even when not hovering (for mobile).

#### Contact
- [ ] Magnetic button is fun, but the "Copied!" toast is utilitarian. Make the feedback part of the button itself.

---

## ✅ Definition of Done (V3)
1. **Top 10 Issues Fixed**: The most glaring issues above are resolved.
2. **"Expensive" Feel**: Interactions feel weighted and deliberate, not just standard CSS transitions.
3. **Signature Established**: The site looks like *Amanuel*, not a template.
