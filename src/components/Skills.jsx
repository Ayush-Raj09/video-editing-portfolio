import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/projects'

const levelColors = {
  Expert: { bg: 'rgba(232,255,0,0.08)', border: 'rgba(232,255,0,0.3)', text: '#e8ff00' },
  Advanced: { bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.1)', text: 'rgba(255,255,255,0.5)' },
}

// Marquee strip of tools / software
const marqueeItems = [
  'ADOBE PREMIERE PRO', 'VIDEO EDITING', 'MOTION GRAPHICS', 'YOUTUBE EDITING',
  'SHORT FORM CONTENT', 'REELS', 'GAMING EDITS', 'SOUND DESIGN',
  'STORYTELLING', 'TRANSITIONS', 'COLOR GRADING', 'PACING',
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="skills" className="relative py-32 bg-[#050505]">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
            Expertise
          </span>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white leading-none mt-4">
            SKILLS &{' '}
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
              TOOLS
            </span>
          </h2>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const colors = levelColors[skill.level] || levelColors.Advanced
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 border group hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: colors.bg,
                  borderColor: colors.border,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl" role="img" aria-label={skill.name}>{skill.icon}</span>
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase px-2 py-1"
                    style={{ color: colors.text, background: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    {skill.level}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-white text-base group-hover:text-[#e8ff00] transition-colors duration-300">
                  {skill.name}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-24 overflow-hidden border-t border-b border-white/5 py-5">
        <div className="flex gap-8 w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-display font-bold text-sm tracking-widest whitespace-nowrap text-white/10">
              {item}
              <span className="mx-6 text-[#e8ff00]">•</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
