import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
}

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-[#0a0a0a]">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,255,0,0.06) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,77,77,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Label */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
              Video Editor & Motion Designer
            </span>
            <div className="flex gap-1">
              <span className="w-1 h-1 rounded-full bg-[#e8ff00]" />
              <span className="w-1 h-1 rounded-full bg-[#e8ff00] opacity-60" />
              <span className="w-1 h-1 rounded-full bg-[#e8ff00] opacity-30" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={item}
            className="font-display font-bold leading-[0.9] tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(52px, 10vw, 140px)' }}
          >
            EDITING{' '}
            <span
              className="inline-block"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.3)',
                WebkitTextFillColor: 'transparent',
              }}
            >
              VISIONS.
            </span>
            <br />
            CREATING{' '}
            <span style={{ color: '#e8ff00' }}>IMPACT.</span>
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-12"
          >
            Turning raw footage into stories that hit different. I'm{' '}
            <span className="text-white font-medium">Ayush Raj</span>, a video editor passionate
            about creating engaging visual stories, high-retention YouTube videos,
            and scroll-stopping short-form content.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll('#work')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#e8ff00] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 hover:-translate-y-1"
            >
              <Play size={15} fill="currentColor" />
              Explore My Work
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold text-sm tracking-widest uppercase hover:border-[#e8ff00] hover:text-[#e8ff00] transition-all duration-300 hover:-translate-y-1"
            >
              Let's Work Together
            </button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={item}
            className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '11+', label: 'Featured Cuts' },
              { value: '10.8K', label: 'Top Video Views' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl text-white">{stat.value}</div>
                <div className="text-xs text-white/40 mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-20 right-8 lg:right-16 hidden lg:flex flex-col items-center gap-3"
      >
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 animate-spin" style={{ animationDuration: '12s' }} viewBox="0 0 80 80">
            <defs>
              <path id="circle" d="M 40,40 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
            </defs>
            <text className="fill-white/40" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="2.5">
              <textPath href="#circle">
                VIDEO EDITOR • MOTION DESIGNER •&nbsp;
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#e8ff00] flex items-center justify-center">
              <Play size={12} fill="black" className="text-black ml-0.5" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
