import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // Update active section
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="font-display font-bold text-lg tracking-widest text-white hover:text-[#e8ff00] transition-colors duration-300"
          >
            AYUSH RAJ
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#e8ff00]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#e8ff00] transition-all duration-300 ${
                  activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="px-5 py-2 bg-[#e8ff00] text-black text-sm font-bold tracking-wider uppercase hover:bg-white transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 inset-x-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-2 px-6 py-3 bg-[#e8ff00] text-black font-bold text-sm tracking-wider uppercase text-center"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
