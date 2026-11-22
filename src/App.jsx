import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import ProjectGrid from './components/ProjectGrid'
import About from './components/About'
import Skills from './components/Skills'
import Collaboration from './components/Collaboration'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Page loader
function Loader({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="font-display font-bold text-3xl tracking-widest text-white">
          AYUSH RAJ
        </div>
        <div className="w-48 h-px bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#e8ff00]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
            onAnimationComplete={onDone}
          />
        </div>
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-white/30">
          Video Editor & Motion Designer
        </div>
      </motion.div>
    </motion.div>
  )
}

// Custom cursor
function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setHovering(true)
    }
    const out = () => setHovering(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[300] pointer-events-none mix-blend-difference"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      >
        <div className={`w-2 h-2 rounded-full bg-white transition-transform duration-200 ${hovering ? 'scale-0' : 'scale-100'}`} />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[300] pointer-events-none"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        <div
          className={`rounded-full border border-white/30 transition-all duration-300 ${
            hovering ? 'w-14 h-14 border-[#e8ff00] bg-[#e8ff00]/10' : 'w-10 h-10'
          }`}
        />
      </motion.div>
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    setShowCursor(window.matchMedia('(pointer: fine)').matches)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={showCursor ? 'cursor-none' : ''}
        >
          {showCursor && <CustomCursor />}

          {/* Noise overlay */}
          <div
            className="fixed inset-0 pointer-events-none z-[150] opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          <Navbar />

          <main>
            <Hero />
            <Showreel />
            <ProjectGrid />
            <About />
            <Skills />
            <Collaboration />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  )
}
