import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Link2, Camera, Play, ArrowRight } from 'lucide-react'

const socials = [
  {
    icon: Link2,
    label: 'LinkedIn',
    handle: 'ayushraj09',
    href: 'https://www.linkedin.com/in/ayushraj09/',
    color: '#0077b5',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'your@email.com',
    href: 'mailto:your@email.com',
    color: '#e8ff00',
    placeholder: true,
  },
  {
    icon: Camera,
    label: 'Instagram',
    handle: '@yourhandle',
    href: '#',
    color: '#e1306c',
    placeholder: true,
  },
  {
    icon: Play,
    label: 'YouTube',
    handle: 'Portfolio & Collab',
    href: 'https://www.youtube.com/@SelfImprover420',
    color: '#ff0000',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="contact" className="relative py-32 bg-[#0a0a0a]">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,255,0,0.15), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(232,255,0,0.03) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
            Contact
          </span>
          <h2 className="font-display font-bold text-white leading-tight mt-4" style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}>
            Have a Project in Mind?<br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
              {"Let's Create Something Great."}
            </span>
          </h2>
          <p className="mt-6 text-white/40 max-w-xl mx-auto leading-relaxed">
            Whether you need a YouTube editor, a reel that stops the scroll, or a full video production
            partner — I'm available for freelance projects, collaborations, and opportunities.
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <a
            href="mailto:your@email.com"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-[#e8ff00] text-black font-display font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 hover:-translate-y-1"
          >
            <Mail size={16} />
            Send Me an Email
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Social links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((social, i) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') || social.href === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                className="p-5 border border-white/8 bg-white/[0.02] hover:border-white/20 group transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ background: `${social.color}15`, border: `1px solid ${social.color}30` }}
                >
                  <Icon size={18} style={{ color: social.color }} />
                </div>
                <div className="font-display font-semibold text-white text-sm group-hover:text-[#e8ff00] transition-colors duration-300">
                  {social.label}
                </div>
                <div className="font-mono text-xs text-white/30 mt-1">
                  {social.handle}
                  {social.placeholder && (
                    <span className="ml-2 text-[#e8ff00]/50">[update]</span>
                  )}
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="font-mono text-xs text-white/20 tracking-wide">
            📧 Update the email and social handles in{' '}
            <code className="text-white/30">src/components/Contact.jsx</code> before going live.
          </span>
          <span className="font-mono text-xs text-white/20">
            Available for work · Based in India
          </span>
        </motion.div>
      </div>
    </section>
  )
}
