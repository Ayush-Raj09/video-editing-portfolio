import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ExternalLink, Youtube } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="testimonials" className="relative py-32 bg-[#050505]">
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
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
            Reviews
          </span>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white leading-none mt-4">
            CLIENT<br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
              WORDS
            </span>
          </h2>
        </motion.div>

        {/* Testimonial placeholder — to be filled with actual review */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="relative p-10 border border-[#e8ff00]/15 bg-[#e8ff00]/[0.02] overflow-hidden">
            {/* Decorative quote mark */}
            <div
              className="absolute -top-6 -left-2 font-display font-bold text-[180px] leading-none select-none pointer-events-none"
              style={{ color: 'rgba(232,255,0,0.04)' }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#e8ff00" className="text-[#e8ff00]" />
              ))}
            </div>

            {/* PLACEHOLDER: Replace with actual testimonial text */}
            <blockquote className="relative z-10">
              <p className="text-white/60 text-lg leading-relaxed italic mb-6">
                [
                <span className="text-[#e8ff00] not-italic font-mono text-sm"> PLACEHOLDER </span>
                — Awaiting actual testimonial from client. Please provide the review received from the YouTuber you worked with, and it will be added here verbatim.]
              </p>
            </blockquote>

            {/* Client info */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center font-display font-bold text-white text-base shrink-0">
                SI
              </div>
              <div>
                <div className="font-display font-semibold text-white">SelfImprover420</div>
                <a
                  href="https://www.youtube.com/@SelfImprover420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white/30 hover:text-[#e8ff00] transition-colors flex items-center gap-1 mt-0.5 group"
                >
                  <Youtube size={11} />
                  YouTube Creator
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <div className="ml-auto font-mono text-[10px] tracking-widest uppercase text-[#e8ff00] border border-[#e8ff00]/30 px-3 py-1.5">
                VERIFIED CLIENT
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="mt-6 p-4 border border-white/5 bg-white/[0.015]">
            <p className="font-mono text-xs text-white/25 leading-relaxed">
              📝 <span className="text-white/40">Note:</span> The actual testimonial/review from the
              collaborating creator will be added here once provided. The structure, design, and
              attribution are ready. Simply share the review text (and optionally a screenshot) and
              it will be placed verbatim in this section.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
