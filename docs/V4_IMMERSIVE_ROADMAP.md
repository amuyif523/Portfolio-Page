# V4 IMMERSIVE OVERHAUL: "THE DIGITAL AETHER"

**Objective:** Transform the portfolio from a "Clean Editorial" site into an industry-leading "Immersive WebGL Experience" comparable to Bruno Simon, Active Theory, and Lando Norris.

**Core Philosophy:**
*   **HTML is secondary:** The primary view is a WebGL Canvas. HTML is just the UI layer.
*   **Physics > Animation:** Things shouldn't just move; they should react, collide, and float.
*   **Shaders > CSS:** Visual effects (blur, distortion, color) happen on the GPU, not the CPU.
*   **Spatial Navigation:** We are not scrolling down a page; we are traveling through a space.

---

## PHASE 1: THE ENGINE (FOUNDATION)

### 🟦 SPRINT 4.1 — R3F ARCHITECTURE & SCENE SETUP
**Goal:** Establish a high-performance 3D environment.
*   **Tech Stack:** Install `three`, `@react-three/fiber`, `@react-three/drei`, `leva` (debug), `r3f-perf`.
*   **Canvas:** Set up a full-screen fixed canvas behind the DOM.
*   **View Manager:** Implement a system to sync HTML DOM positions with 3D Canvas positions (using `drei/View` or custom `useScroll` logic).
*   **Asset Loader:** Implement a robust `useLoader` strategy with a custom preloader screen (essential for heavy assets).

### 🟦 SPRINT 4.2 — THE "AETHER" (GLOBAL ATMOSPHERE)
**Goal:** Create a signature background that screams "Creative Technologist".
*   **Concept:** A GPGPU Particle System or Fluid Simulation.
*   **Implementation:**
    *   Create a custom GLSL shader for a particle field (10k+ particles).
    *   **Interaction:** Cursor acts as a repulsor/attractor field.
    *   **Motion:** Particles have "life" (noise-based movement) even when static.
*   **Outcome:** The site feels "alive" immediately upon load.

---

## PHASE 2: THE OBJECTS (CONTENT)

### 🟦 SPRINT 4.3 — THE MONOLITHS (PROJECTS REIMAGINED)
**Goal:** Turn flat project cards into 3D interactive artifacts.
*   **Geometry:** Projects are represented by 3D meshes (Glass slabs, Cyberpunk cartridges, or Abstract shapes).
*   **Material:** Custom `ShaderMaterial` with refraction, chromatic aberration, and dynamic reflections.
*   **Texture:** Project screenshots are mapped onto these objects, but distorted by the glass/material.
*   **Interaction:** Hovering an object triggers a "power up" state (emission bloom, rotation, scale).

### 🟦 SPRINT 4.4 — THE HERO SCENE (PHYSICS PLAYGROUND)
**Goal:** A Bruno Simon-esque interactive toy in the Hero section.
*   **Physics Engine:** Install `@react-three/cannon` or `@react-three/rapier`.
*   **Scene:** Drop physical objects (letters of your name, tech stack icons) into the scene.
*   **Interaction:** User can knock them over with the mouse or scroll.
*   **Gravity:** Elements float in zero-G or fall with heavy weight depending on the "mood".

---

## PHASE 3: THE CAMERA (NAVIGATION)

### 🟦 SPRINT 4.5 — SCROLL-JACKED CAMERA RIG
**Goal:** Replace standard scrolling with cinematic camera movement.
*   **Rig:** Create a camera path (Catmull-Rom spline) that the camera follows based on scroll progress.
*   **Depth:** As you scroll "down", the camera moves "forward" through the particle field (The Aether).
*   **Parallax:** Background elements move slower than foreground Monoliths.
*   **Damping:** Heavy `lerp` on the camera movement for that "Active Theory" smooth feel.

### 🟦 SPRINT 4.6 — PORTAL TRANSITIONS
**Goal:** Seamless entry into Project Details.
*   **Technique:** When clicking a Project Monolith, the camera flies *into* the object.
*   **Shader:** The object's texture expands to fill the screen using a "disintegration" or "warp" shader.
*   **Result:** No hard cuts. The user travels *inside* the project.

---

## PHASE 4: THE POLISH (POST-PROCESSING)

### 🟦 SPRINT 4.7 — CINEMATIC POST-PROCESSING
**Goal:** The "Lando Norris" high-end editorial look.
*   **Stack:** `@react-three/postprocessing`.
*   **Pipeline:**
    1.  **Bloom:** Selective bloom on highlights (text, neon accents).
    2.  **Noise:** Dynamic film grain (animated).
    3.  **Vignette:** Focus attention on the center.
    4.  **Chromatic Aberration:** Subtle RGB split at the edges for a lens-like feel.
    5.  **Fluid Distortion:** A global distortion pass based on mouse velocity.

### 🟦 SPRINT 4.8 — AUDIO REACTIVITY (OPTIONAL BUT RECOMMENDED)
**Goal:** Multi-sensory immersion.
*   **Audio:** Ambient drone or subtle UI sounds (hover clicks, swooshes).
*   **Reactivity:** The Particle Aether pulses to the beat of the ambient track.

---

## EXECUTION ORDER

1.  **Sprint 4.1:** Engine Setup (Get the Canvas ready).
2.  **Sprint 4.2:** The Aether (Make it look cool).
3.  **Sprint 4.3:** The Monoliths (Make the content 3D).
4.  **Sprint 4.5:** Camera Rig (Make the navigation spatial).
5.  **Sprint 4.7:** Post-Processing (Make it look expensive).
6.  **Sprint 4.4:** Physics (Add the "toy" factor).
7.  **Sprint 4.6:** Transitions (Connect the pages).

**Ready to begin Sprint 4.1?**
