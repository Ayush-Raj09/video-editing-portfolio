import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

export default function Showreel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const [playing, setPlaying] = useState(false)
  const iframeRef = useRef(null)

  // YouTube video ID for showreel - using the first featured video
  const SHOWREEL_VIDEO_ID = 'xm3ElQvRMb8'

  const togglePlay = () => {
    setPlaying(!playing)
  }

  return (
    <section id="showreel" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,255,0,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
            Featured Work
          </span>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white mt-4 leading-none">
            SELECTED<br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
              CUTS
            </span>
          </h2>
        </motion.div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="relative aspect-video bg-[#111] overflow-hidden rounded-sm">
            {!playing ? (
              /* Thumbnail with play overlay */
              <div className="relative w-full h-full">
                <img
                  src={`https://img.youtube.com/vi/${SHOWREEL_VIDEO_ID}/maxresdefault.jpg`}
                  alt="Featured work preview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play button */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center group/btn"
                  aria-label="Play video"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover/btn:border-[#e8ff00] group-hover/btn:bg-[#e8ff00]/10 transition-all duration-300"
                  >
                    <Play size={28} fill="white" className="text-white ml-1 group-hover/btn:text-[#e8ff00]" />
                  </motion.div>
                </button>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="font-mono text-xs tracking-widest text-[#e8ff00] mb-2">YOUTUBE LONG-FORM</div>
                  <h3 className="font-display font-bold text-2xl text-white">SelfImprover420 — Featured Edit</h3>
                  <p className="text-white/50 text-sm mt-1">Click to watch the full video</p>
                </div>
              </div>
            ) : (
              /* Actual YouTube embed */
              <iframe
                ref={iframeRef}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${SHOWREEL_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Showreel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Border glow effect */}
          <div
            className="absolute inset-0 rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: '0 0 60px rgba(232,255,0,0.08), inset 0 0 60px rgba(232,255,0,0.02)' }}
          />
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center justify-between flex-wrap gap-4"
        >
          <div className="flex items-center gap-6 text-sm text-white/40">
            <span className="font-mono">Video Editing</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-mono">YouTube Content</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-mono">Storytelling</span>
          </div>
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="font-mono text-xs tracking-widest uppercase text-[#e8ff00] hover:text-white transition-colors flex items-center gap-2 group"
          >
            View All Work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
