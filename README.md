# Nexroythm — Custom Digital Products & Identity Studio

Welcome to the frontend codebase for **Nexroythm** — a premium, professional digital product studio and custom web development brand. 

This platform acts as a digital storefront, catalogue showcase, and project estimator. It is designed with a clean, modern aesthetic reflecting a high-end tech studio (Nothing Phone / Apple inspired).

---

## 🌟 Brand Identity

- **Name:** Nexroythm
- **Tagline Sequence (Animated rotation):**
  1. *"Your Vision. Our Code. One Rhythm."*
  2. *"One Vision. Our Code. One Rhythm."*
  3. *"We Are Nexroythm."*
- **Mission:** Turn personal ideas into high-performance digital products — from custom portfolio websites to dashboards, and celebration pages.
- **WhatsApp Support Link:** `https://wa.me/message/R4UGDDZIK5XML1`
- **Email Contact:** `nexroythm@gmail.com`

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (fast HMR, lightweight ESM bundling)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using native CSS custom variables)
- **Routing:** [React Router Dom v6](https://reactrouter.com/) (declarative page-based routing)
- **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis) (seamless wheel and touch physics)
- **Animations:** [GSAP](https://greensock.com/gsap/) + custom GPU-accelerated CSS Keyframes (performance first)
- **Icons:** [Lucide React](https://lucide.dev/) (clean vector stroke icons)

---

## 📂 Project Structure

```bash
src/
├── assets/          # Static layout assets
├── components/      # Common layout structures
│   ├── Navbar.jsx   # Responsive header with mobile hamburger drawer
│   └── Footer.jsx   # Clean footer with link pillars and custom brand SVGs
├── pages/           # Page-level containers
│   ├── Home.jsx      # Marketing hero, process timeline, stats, testimonials, animated taglines
│   ├── Catalogue.jsx # Live product preview list with Netlify redirect options
│   ├── Pricing.jsx   # 4 core minimal pricing tiers, FAQ, and comparison metrics
│   └── About.jsx     # Studio leadership, values, and secure direct contact path
├── App.jsx          # Router wrapping, Lenis smooth scrolling, GSAP entry reveals
├── main.jsx         # App initialization with BrowserRouter
└── index.css        # Tailwind theme variables, custom scrollbars, animations config
```

---

## 🖥️ Live Portfolio Works

The **Catalogue** page lists deployed applications with custom screenshot thumbnails, features, and direct redirection:
- **Portfolios:**
  - *Portfolio Demo 1* — `https://prradeepp.netlify.app/`
  - *Portfolio Demo 2* — `https://pradeepkumr.netlify.app/`
  - *Portfolio Demo 3* — `https://pradeepkumardas.netlify.app/`
- **Dashboards:**
  - *Smart Analytics Dashboard* — `https://snazzy-salamander-c303f4.netlify.app/`
  - *Habit Tracker* — `https://habittrracker.netlify.app/`
  - *Pro Calendar* — `https://pracalendar.netlify.app/`
  - *Smart Study Planner* — `https://smartstudyplane.netlify.app/`
- **Websites & Gifts:**
  - *Professional Business Website* — `https://prdipland.netlify.app/`
  - *Trip Planner App* — `https://tripkaplaneer.netlify.app/`
  - *Happy Father's Day — Gift Site* — `https://happyfatherrsday.netlify.app/`
  - *Wedding Invitation Card* — `https://weddingsp.netlify.app/`

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (version 18+) and npm installed on your system.

### Installation

1. Navigate to the project directory:
   ```bash
   cd "RoadMap website/Nexroythm"
   ```
2. Install all dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Linting Checks

Analyze code quality and structure using Oxlint:
```bash
npm run lint
```

### Production Build

Compile and optimize files for deployment:
```bash
npm run build
```
The compiled static assets will be located in the `dist/` directory, ready to be served by Netlify, Vercel, or any other hosting solution.
