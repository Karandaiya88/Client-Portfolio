# Sanjay Panwar — 3D Animated Portfolio
### Built with Next.js 15 + React + Framer Motion + TailwindCSS

---

## 🚀 How to Run Locally

### Step 1 — Install Dependencies
```bash
npm install
```

### Step 2 — Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3 — Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure
```
sanjay-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles + animations
├── components/
│   ├── Navbar.tsx          # Sticky animated navbar
│   ├── HeroSection.tsx     # 3D hero with counter animations
│   ├── FloatingCards3D.tsx # Floating metric cards
│   ├── ParticlesBg.tsx     # Interactive particle background
│   ├── CareerSection.tsx   # Animated timeline (3 companies)
│   ├── MetricsSection.tsx  # Animated bar charts
│   ├── NetworkSection.tsx  # Dealer network + zone table
│   ├── StrategySection.tsx # Strategy cards + skill bars
│   ├── LeadershipSection.tsx # Team stats
│   ├── AwardsSection.tsx   # Awards grid
│   ├── EducationSection.tsx # Education cards
│   ├── ContactSection.tsx  # Contact info + CTA
│   └── Footer.tsx          # Footer
```

---

## ✨ Animations Included
- **Particle background** — interactive, click to add particles
- **Floating 3D cards** — metric cards floating around hero
- **Scroll reveal** — every section animates on scroll
- **Animated bar charts** — bars fill when scrolled into view
- **Counter animation** — numbers count up on page load
- **Hover effects** — cards lift and glow on hover
- **Rotating rings** — decorative rings in hero background
- **Pulse rings** — avatar pulse animation
- **Promo banner bounce** — rocket icon bounces

---

## 🎨 To Add Client Photo
Replace the `SP` initials avatar in `HeroSection.tsx`:
```tsx
// Find this section and replace with:
<Image src="/photo.jpg" alt="Sanjay Panwar" width={128} height={128} className="rounded-full" />
```
Place the photo file in `/public/photo.jpg`

---

## 📦 Tech Stack
- **Next.js 15** (App Router)
- **React 19**
- **Framer Motion** — animations
- **TailwindCSS** — styling
- **tsParticles** — particle background
- **TypeScript**

---

*Portfolio for Sanjay Panwar — Assistant Sales Manager, Saint-Gobain*
