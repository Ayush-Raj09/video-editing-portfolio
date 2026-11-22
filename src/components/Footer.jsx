import { Mail, Heart } from 'lucide-react'

const LinkedInIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z" />
  </svg>
)

const InstagramIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export default function Footer() {
  const handleNav = (href) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo & Tagline */}
          <div>
            <div className="font-display font-bold text-xl tracking-widest text-white mb-2">
              AYUSH RAJ
            </div>
            <div className="font-mono text-xs text-white/40 tracking-wide">
              Video Editor & Motion Designer
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {['Home', 'Work', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); handleNav(`#${item.toLowerCase()}`) }}
                className="font-mono text-xs tracking-widest uppercase text-white/40 hover:text-[#e8ff00] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:ayushraj.work9@gmail.com"
              title="Email Ayush"
              className="w-10 h-10 border border-white/10 rounded-xs flex items-center justify-center hover:border-[#e8ff00] hover:text-[#e8ff00] text-white/60 transition-all duration-300 bg-white/[0.02]"
            >
              <Mail size={16} />
            </a>

            <a
              href="https://www.instagram.com/asp3ct.09?lqvp=MXBodWpsd2djcmd6NA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram @asp3ct.09"
              className="w-10 h-10 border border-white/10 rounded-xs flex items-center justify-center hover:border-[#e1306c] hover:text-[#e1306c] text-white/60 transition-all duration-300 bg-white/[0.02]"
            >
              <InstagramIcon size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/ayushraj09/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="w-10 h-10 border border-white/10 rounded-xs flex items-center justify-center hover:border-[#0a66c2] hover:text-[#0a66c2] text-white/60 transition-all duration-300 bg-white/[0.02]"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} Ayush Raj. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/30 flex items-center gap-1.5">
            Crafted for creators & brands with <Heart size={11} fill="#e8ff00" className="text-[#e8ff00]" />
          </p>
        </div>
      </div>
    </footer>
  )
}
