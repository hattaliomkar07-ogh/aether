# AETHER — JOURNEY THROUGH DIMENSIONS
> **"SCROLL BEYOND THE ORDINARY."**  
> *A Premium Interactive Multi-Layer Parallax Scrolling Website*  
> **Created by Omkar**

---

## 🌟 Overview

**AETHER — Journey Through Dimensions** is a production-grade, highly responsive web experience demonstrating advanced multi-layer parallax scrolling techniques. Rather than resorting to dark, clichéd cyberpunk tropes, AETHER embraces a **sophisticated, luminous bright theme** featuring fluid glassmorphism, ethereal lighting, crisp gradients, and physics-informed motion.

Visitors embark on a continuous dimensional journey across technology, nature, space, and innovation—where foreground, midground, and background strata move at calculated, distinct velocities.

---

## 🎨 Visual Design — Bright Premium Theme

### Color Palette
- **Pure White**: `#FFFFFF`
- **Soft White**: `#F8FAFC`
- **Ice Blue**: `#EAF5FF`
- **Light Lavender**: `#F1EDFF`
- **Soft Peach**: `#FFF0E7`

### Accents & Gradients
- **Electric Blue**: `#3568FF`
- **Violet**: `#8664FF`
- **Cyan**: `#45C8E8`
- **Coral**: `#FF806F`
- **Amber Orange**: `#FFB45B`

### Typography & Aesthetics
- **Headings**: `Space Grotesk` (geometric, futuristic, bold)
- **Body**: `Plus Jakarta Sans` / `Inter` (refined readability)
- **Design Elements**: Multi-stop subtle gradients, frosted glass (`backdrop-filter: blur(20px)`), soft atmospheric depth glows, and 3D floating prisms.

---

## 📐 Parallax Engineering & Velocity System

AETHER implements **authentic multi-layer parallax scrolling** where movement is mathematically coupled to scroll trajectory:

| Layer | Velocity Ratio | Visual Elements |
|---|---|---|
| **Background Layer** | `~0.15×` scroll speed | Distant mountain SVG silhouettes, ambient planetary glows, starfields, solar gradients |
| **Middle Strata** | `~0.40×` scroll speed | Intermediate topography, orbital planet bodies, floating glass panels, abstract trees |
| **Foreground Layer** | `~0.75×` scroll speed | Drifting leaves, orbital satellites, sparkling particles, high-velocity geometry |
| **Interactive Floating Elements** | Independent rotation / drift | Framer Motion floating prisms, mouse-parallax responsive transforms |

---

## 🧭 Website Sections Breakdown

1. **Section 1: Premium Navigation (`Navbar.jsx`)**
   - Floating glassmorphic dock with active section tracking via `IntersectionObserver`.
   - Smooth anchor scrolling and fully responsive collapsible mobile menu.
2. **Section 2: Hero: Enter the Experience (`Hero.jsx`)**
   - Oversized gradient headline *"SCROLL BEYOND THE ORDINARY."*
   - Interactive mouse-depth tracking (`useMousePosition`), floating prisms, drifting clouds, and dual CTA buttons with scroll indicator.
3. **Section 3: The Journey Begins (`Journey.jsx`)**
   - Staggered word entrance *"Every Scroll Opens A New World."*
   - Angled decorative frosted planes and overlapping geometry.
4. **Section 4: Dimension One: Technology (`Technology.jsx`)**
   - Circuit traces, floating virtual UI displays, and interactive glass cards:
     1. *Artificial Intelligence*
     2. *Robotics*
     3. *Future Computing*
5. **Section 5: Dimension Two: Nature (`Nature.jsx`)**
   - Mountain ridges, drifting clouds with independent lateral velocities, and 14+ floating foliage particles.
   - Interactive cards highlighting Mountains, Fluid Currents, Organic Depth, and Luminous Dawn.
6. **Section 6: Dimension Three: Space (`Space.jsx`)**
   - Bright celestial environment in lavender, ice blue, and violet.
   - Interactive rotating planet cards (*Nebula Prime*, *Horizon Alpha*, *Solstice IV*) with tilted orbital rings.
7. **Section 7: Dimension Four: Innovation (`Innovation.jsx`)**
   - Showcase cards celebrating:
     1. *Engineering*
     2. *Creativity*
     3. *Scientific Discovery*
     4. *Entrepreneurship*
8. **Section 8: Interactive Parallax Showcase (`ParallaxShowcase.jsx`)**
   - Full-screen pinned GSAP ScrollTrigger timeline scene.
   - Real-time visualization of 0.15×, 0.40×, and 0.75× layer velocity separation with shifting background gradient and live speed indicators.
9. **Section 9: Final Experience (`FinalSection.jsx`)**
   - Climax section featuring the message *"THE JOURNEY DOESN'T END HERE."*
   - "Explore Again" button with smooth scroll return to top.
10. **Section 10: Footer (`Footer.jsx`)**
    - AETHER brand information, dimension navigation links, social SVG vectors, and back-to-top button.

---

## 🛠️ Technology Stack

- **Framework**: React 18+ with Vite
- **Motion & Parallax**: GSAP 3 + ScrollTrigger, Framer Motion
- **Icons**: Lucide React + custom inline brand SVGs
- **Typography**: Google Fonts (`Space Grotesk`, `Plus Jakarta Sans`, `Inter`)
- **CSS Architecture**: CSS3 transforms, perspective, hardware-accelerated transforms (`will-change: transform`), modern glassmorphism.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18.0.0 or higher) and npm are installed.

### 2. Installation
```bash
# Clone or navigate to the project directory
cd aether

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Production Build
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` from the project directory.
3. Or import your GitHub repository directly on [vercel.com](https://vercel.com).
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Deploy to Netlify
1. Drag and drop the `dist/` folder into [app.netlify.com/drop](https://app.netlify.com/drop).
2. Or connect your Git repository and set:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add `base: './'` to `vite.config.js`.
3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 💻 GitHub Publishing Guide

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: AETHER - Journey Through Dimensions by Omkar"

# Rename branch to main
git branch -M main

# Add remote repository
git remote add origin https://github.com/<your-username>/aether.git

# Push to GitHub
git push -u origin main
```

---

## 📄 License & Credits

Created with passion by **Omkar**.  
All rights reserved. Designed to push the boundaries of creative web development and modern interactive parallax scrolling.
