import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Scissors, Zap, Film, Monitor } from 'lucide-react'

const timeline = [
  {
    year: '2024–Now',
    title: 'Freelance Video Editor',
    desc: 'Working with YouTube creators, brands, and content creators to deliver high-quality edits that drive engagement and growth.',
    icon: Film,
  },
  {
    year: '2023–2024',
    title: 'YouTube Content Editing',
    desc: 'Edited long-form YouTube content for the SelfImprover420 channel — focusing on storytelling, pacing, and viewer retention.',
    icon: Monitor,
  },
  {
    year: '2022',
    title: 'Started Editing',
    desc: 'Discovered the craft of video editing and motion graphics. Started experimenting with Adobe Premiere Pro, building a foundation in storytelling and post-production.',
    icon: Scissors,
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="about" className="relative py-32 bg-[#0a0a0a]">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
              About
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-none mt-4 mb-8">
              THE EDIT<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
                IS EVERYTHING.
              </span>
            </h2>

            <div className="space-y-5 text-white/50 leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Ayush Raj</span> — a video editor and motion
                designer with 2+ years of experience turning raw footage into stories that connect,
                engage, and inspire action.
              </p>
              <p>
                My work lives at the intersection of visual storytelling and technical precision.
                Whether it's a long-form YouTube video that needs to hold attention for 20 minutes,
                or a 30-second reel that has to stop someone mid-scroll — I know how to craft the edit
                that makes it work.
              </p>
              <p>
                I specialize in <span className="text-white">YouTube content editing</span>,{' '}
                <span className="text-white">short-form video</span>, gaming edits, and motion graphics —
                using Adobe Premiere Pro as my primary tool. Every project I take on gets the same level
                of care: tight cuts, intentional pacing, sound design that feels right, and visuals
                that reflect the creator's voice.
              </p>
              <p>
                I believe great editing is invisible — the viewer shouldn't notice the edit. They should
                just feel it.
              </p>
            </div>

            {/* Tools */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['Adobe Premiere Pro', 'Motion Graphics', 'Color Grading', 'Sound Design'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 border border-white/10 text-white/50 font-mono text-xs tracking-wide"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* LinkedIn */}
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/ayushraj09/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#e8ff00] hover:text-white transition-colors group"
              >
                Connect on LinkedIn
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-white/30 mb-6">
              Journey
            </div>

            {timeline.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                  className="flex gap-5 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center bg-white/[0.03] group-hover:border-[#e8ff00]/40 transition-colors duration-300">
                      <Icon size={18} className="text-white/40 group-hover:text-[#e8ff00] transition-colors duration-300" />
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 mt-4 bg-white/5" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="font-mono text-xs text-[#e8ff00] mb-1">{item.year}</div>
                    <h4 className="font-display font-semibold text-white text-lg mb-2">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Avatar / visual element */}
            <div className="p-6 border border-white/5 bg-white/[0.02]">
              <div className="font-mono text-[10px] tracking-widest uppercase text-white/20 mb-3">
                Currently Available For
              </div>
              <div className="flex flex-wrap gap-2">
                {['Freelance Projects', 'YouTube Editing', 'Agency Collabs', 'Internships'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#e8ff00]/10 border border-[#e8ff00]/20 text-[#e8ff00] font-mono text-[10px] tracking-wide uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
