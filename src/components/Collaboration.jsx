import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, PlayCircle, Film, Users, TrendingUp, CheckCircle, Award } from 'lucide-react'

const highlights = [
  {
    icon: Film,
    title: 'Long-Form YouTube Production',
    desc: 'Structured storytelling, visual cues, and narrative pacing crafted for long-format viewer retention.',
  },
  {
    icon: TrendingUp,
    title: 'Channel Top Performer (#1 of 10)',
    desc: 'The edited video "How To Fix Your Recessed Chin" achieved 10.8K+ views and became the channel\'s highest ranking video.',
  },
  {
    icon: Users,
    title: 'Audience Engagement & Retention',
    desc: 'Strategic jump cuts, graphic callouts, sound design, and micro-zooms that maintain average percentage viewed.',
  },
  {
    icon: PlayCircle,
    title: 'Tailored Creator Vision',
    desc: 'Executed exactly to the creator\'s stylistic vision and brand tone, validated by direct client feedback.',
  },
]

export default function Collaboration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="collaboration" className="relative py-32 bg-[#0a0a0a]">
      {/* Top divider */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,255,0,0.15), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Context & High-level details */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00] flex items-center gap-2">
              <Award size={14} />
              Featured Creator Partnership
            </span>

            <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-none mt-4 mb-6">
              PARTNERING WITH<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
                SELFIMPROVER420
              </span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-8">
              Collaborated closely with{' '}
              <a
                href="https://www.youtube.com/@SelfImprover420"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8ff00] hover:text-white transition-colors font-medium underline underline-offset-4"
              >
                SelfImprover420
              </a>
              {' '}on their long-form YouTube content. The mission: elevate their self-improvement video production to hook viewers in the opening seconds, maintain retention through high-energy visual pacing, and deliver a polished cinematic aesthetic that converts views into dedicated subscribers.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-10 h-10 border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-[#e8ff00]/50 transition-colors duration-300 rounded-xs">
                      <Icon size={18} className="text-white/40 group-hover:text-[#e8ff00] transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{h.title}</div>
                      <div className="text-white/40 text-xs mt-0.5 leading-relaxed">{h.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <a
              href="https://www.youtube.com/@SelfImprover420"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-white/15 text-white/70 hover:border-[#e8ff00] hover:text-[#e8ff00] transition-all duration-300 font-mono text-xs tracking-widest uppercase group rounded-xs"
            >
              <PlayCircle size={16} />
              Visit Creator's Channel
              <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
            </a>
          </motion.div>

          {/* Right Column: Channel & Project Showcase Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8 relative overflow-hidden rounded-sm">
              {/* Subtle background flare */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(232,255,0,0.06) 0%, transparent 70%)' }}
              />

              {/* Channel Profile Header */}
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-display font-bold text-white text-lg shadow-lg">
                  SI
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg flex items-center gap-2">
                    SelfImprover420
                    <CheckCircle size={15} className="text-[#e8ff00]" />
                  </h3>
                  <div className="font-mono text-xs text-white/40 tracking-wide mt-0.5">
                    Self-Improvement & Lifestyle Creator
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="font-mono text-[10px] tracking-widest uppercase bg-red-600/20 text-red-400 border border-red-600/30 px-2.5 py-1 rounded-xs">
                    YOUTUBE
                  </span>
                </div>
              </div>

              {/* The Two Collaborated Projects */}
              <div className="space-y-4 mb-6">
                <div className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">
                  Featured Videos Edited by Ayush Raj:
                </div>

                {/* Project 1 */}
                <a
                  href="https://www.youtube.com/watch?v=xm3ElQvRMb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 group/card bg-black/60 hover:bg-black/90 p-3 rounded-xs border border-white/5 hover:border-[#e8ff00]/40 transition-all duration-300"
                >
                  <div className="relative w-28 h-18 shrink-0 overflow-hidden rounded-xs bg-black">
                    <img
                      src="https://img.youtube.com/vi/xm3ElQvRMb8/mqdefault.jpg"
                      alt="Recessed Chin Guide"
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/card:bg-transparent transition-colors">
                      <div className="w-7 h-7 rounded-full bg-[#e8ff00] text-black flex items-center justify-center shadow">
                        <PlayCircle size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-white font-semibold text-xs md:text-sm group-hover/card:text-[#e8ff00] transition-colors line-clamp-2">
                      How To Fix Your Recessed Chin (Full Guide)
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="font-mono text-[10px] text-[#e8ff00] bg-[#e8ff00]/10 px-1.5 py-0.2 rounded-xs">
                        10.8K+ Views · #1 on Channel
                      </span>
                    </div>
                  </div>
                </a>

                {/* Project 2 */}
                <a
                  href="https://www.youtube.com/watch?v=aQIcEmvviPs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 group/card bg-black/60 hover:bg-black/90 p-3 rounded-xs border border-white/5 hover:border-[#e8ff00]/40 transition-all duration-300"
                >
                  <div className="relative w-28 h-18 shrink-0 overflow-hidden rounded-xs bg-black">
                    <img
                      src="https://img.youtube.com/vi/aQIcEmvviPs/mqdefault.jpg"
                      alt="Low Testosterone Signs"
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/card:bg-transparent transition-colors">
                      <div className="w-7 h-7 rounded-full bg-[#e8ff00] text-black flex items-center justify-center shadow">
                        <PlayCircle size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-white font-semibold text-xs md:text-sm group-hover/card:text-[#e8ff00] transition-colors line-clamp-2">
                      10 Signs You Have Low Testosterone ‼️
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="font-mono text-[10px] text-white/50 bg-white/5 px-1.5 py-0.2 rounded-xs">
                        High Audience Retention Edit
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {['Long-Form Editing', 'Sound Design', 'Story Pacing', 'Retention Hooks', 'Adobe Premiere Pro'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 font-mono text-[9px] tracking-wider uppercase border border-white/10 text-white/40 rounded-xs">
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
