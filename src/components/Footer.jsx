import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  const handleNav = (href) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo */}
          <div>
            <div className="font-display font-bold text-xl tracking-widest text-white mb-2">
              AYUSH RAJ
            </div>
            <div className="font-mono text-xs text-white/30 tracking-wide">
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
                className="font-mono text-xs tracking-widest uppercase text-white/30 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ayushraj09/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-[#e8ff00]/40 hover:text-[#e8ff00] text-white/40 transition-all duration-300"
            >
              <Linkedin size={15} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/20">
            © {new Date().getFullYear()} Ayush Raj. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/20 flex items-center gap-1.5">
            Built with <Heart size={11} fill="#e8ff00" className="text-[#e8ff00]" /> using React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
