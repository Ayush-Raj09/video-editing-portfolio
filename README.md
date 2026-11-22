# Ayush Raj — Video Editor & Motion Designer Portfolio

A premium, cinematic portfolio website for Ayush Raj — built to attract freelance clients, content creators, YouTube channels, agencies, and job/internship opportunities.

## 🎬 Live Preview

> Run locally using the instructions below.

## ✨ Features

- 🎨 Dark cinematic aesthetic with accent lighting
- ⚡ Smooth scroll-triggered animations via Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎥 YouTube video embeds with lazy loading
- 🖱️ Custom cursor effect (desktop only)
- 🔤 Editorial typography (Space Grotesk + Inter)
- 📂 Filterable project portfolio grid
- 🎭 Video modal/lightbox with YouTube playback
- 🔁 Cinematic page loading animation
- ♿ Accessible navigation and semantic HTML
- 🔍 SEO meta tags + Open Graph

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI framework |
| Vite 6 | Build tool |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icons |

## 📁 Project Structure

```
src/
  components/
    Navbar.jsx        — Sticky animated navigation
    Hero.jsx          — Full-screen cinematic hero
    Showreel.jsx      — Featured video section
    ProjectGrid.jsx   — Portfolio grid with filters & modal
    About.jsx         — Personal intro + timeline
    Skills.jsx        — Animated skills cards
    Collaboration.jsx — SelfImprover420 creator section
    Testimonials.jsx  — Client review section
    Contact.jsx       — Contact + social links
    Footer.jsx        — Site footer
  data/
    projects.js       — Project data (videos, metadata)
  App.jsx             — Root app + loader + cursor
  main.jsx            — Entry point
  index.css           — Global styles
public/
  videos/             — Local video assets (add your own)
  thumbnails/         — Local thumbnail images
  images/             — General images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repo (after pushing to GitHub)
git clone https://github.com/YOUR_USERNAME/ayushraj-portfolio.git
cd ayushraj-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## ⚙️ Customization Checklist

Before deploying, update these values:

- [ ] **Email** — in `src/components/Contact.jsx` (replace `your@email.com`)
- [ ] **Instagram handle** — in `src/components/Contact.jsx`
- [ ] **Testimonial** — in `src/components/Testimonials.jsx` (replace placeholder with actual review)
- [ ] **Additional projects** — in `src/data/projects.js` (add Drive video assets)
- [ ] **Local videos/thumbnails** — place in `public/videos/` and `public/thumbnails/`
- [ ] **OG image** — place at `public/og-image.jpg`
- [ ] **Favicon** — replace `public/favicon.svg`

## 📦 Adding More Projects

Edit `src/data/projects.js`:

```js
{
  id: 3,
  title: "My Reel Edit",
  category: "Instagram Reels / Shorts",
  tags: ["Reels", "Short-Form"],
  description: "...",
  youtubeId: "VIDEO_ID",           // or use videoSrc for local files
  thumbnail: "/thumbnails/reel.jpg", // local thumbnail
  role: "Video Editing",
  featured: false,
}
```

## 🌐 Deployment

Recommended platforms (free tiers available):

- **Vercel** — `vercel --prod` (zero config with Vite)
- **Netlify** — drag-and-drop `dist/` folder
- **GitHub Pages** — with `vite-plugin-gh-pages`

## 📄 License

This project is personal portfolio work by Ayush Raj. All editing work and content belong to their respective creators.

---

Built with ♥ using React + Framer Motion
