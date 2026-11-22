import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, PlayCircle, Film, Users, TrendingUp } from 'lucide-react'

const highlights = [
  {
    icon: Film,
    title: 'Long-Form Editing',
    desc: 'Full-length YouTube videos crafted for high audience retention, structured narratives, and clean post-production.',
  },
  {
    icon: TrendingUp,
    title: 'Storytelling & Pacing',
    desc: 'Intentional editing rhythm that guides the viewer — keeping them engaged from intro to outro.',
  },
  {
    icon: Users,
    title: 'Audience Engagement',
    desc: "Editing choices that serve the creator's voice and help build a connection with their audience.",
  },
  {
    icon: PlayCircle,
    title: 'Content Presentation',
    desc: 'Visual structure, B-roll integration, graphics, and titles that elevate the final presentation.',
  },
]

export default function Collaboration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="collaboration" className="relative py-32 bg-[#0a0a0a]">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,255,0,0.1), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
              Collaboration
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-none mt-4 mb-6">
              CREATOR<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
                PARTNERSHIP
              </span>
            </h2>

            <p className="text-white/50 leading-relaxed mb-8">
              I've worked with{' '}
              <a
                href="https://www.youtube.com/@SelfImprover420"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8ff00] hover:text-white transition-colors font-medium"
              >
                SelfImprover420
              </a>
              {' '}on their YouTube channel — handling video editing for long-form content
              focused on self-improvement, mindset, and lifestyle. The collaboration involved
              producing clean, engaging edits that matched the creator's authentic communication
              style and helped present their ideas in the most compelling way possible.
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
                    <div className="w-9 h-9 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#e8ff00]/40 transition-colors duration-300">
                      <Icon size={16} className="text-white/30 group-hover:text-[#e8ff00] transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{h.title}</div>
                      <div className="text-white/40 text-sm mt-0.5">{h.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <a
              href="https://www.youtube.com/@SelfImprover420"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/15 text-white/60 hover:border-[#e8ff00] hover:text-[#e8ff00] transition-all duration-300 font-mono text-xs tracking-widest uppercase group"
            >
              <PlayCircle size={15} />
              Visit Channel
              <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
            </a>
          </motion.div>

          {/* Right: Channel visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border border-white/8 bg-white/[0.02] p-8 relative overflow-hidden">
              {/* Background glow */}
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.05) 0%, transparent 70%)' }}
              />

              {/* Channel header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-display font-bold text-white text-lg">
                  SI
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">SelfImprover420</h3>
                  <div className="font-mono text-xs text-white/30 tracking-wide">YouTube Channel</div>
                </div>
                <div className="ml-auto">
                  <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                    <PlayCircle size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Two featured video thumbnails */}
              <div className="space-y-3 mb-8">
                {[
                  { id: 'xm3ElQvRMb8', title: 'Featured Edit #1' },
                  { id: 'aQIcEmvviPs', title: 'Featured Edit #2' },
                ].map((v) => (
                  <a
                    key={v.id}
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 group hover:bg-white/5 p-2 -mx-2 transition-colors rounded-sm"
                  >
                    <div className="relative w-24 h-14 shrink-0 overflow-hidden rounded-sm">
                      <img
                        src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                        alt={v.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-black/50 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{v.title}</div>
                      <div className="text-white/30 text-xs mt-1 font-mono">Video Editing</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['Self-Improvement', 'Long-Form', 'YouTube', 'Mindset'].map(tag => (
                  <span key={tag} className="px-3 py-1 font-mono text-[10px] tracking-wide uppercase border border-white/8 text-white/30">
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
