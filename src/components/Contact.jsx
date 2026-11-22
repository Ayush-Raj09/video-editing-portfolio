import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight, Check, Copy } from 'lucide-react'

const LinkedInIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z" />
  </svg>
)

const InstagramIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const contacts = [
  {
    icon: Mail,
    label: 'Direct Email',
    handle: 'ayushraj.work9@gmail.com',
    href: 'mailto:ayushraj.work9@gmail.com',
    actionText: 'Compose Email',
    accentColor: '#e8ff00',
    isCopyable: true,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    handle: '@asp3ct.09',
    href: 'https://www.instagram.com/asp3ct.09?lqvp=MXBodWpsd2djcmd6NA%3D%3D&utm_source=qr',
    actionText: 'View Profile',
    accentColor: '#e1306c',
    isExternal: true,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    handle: 'in/ayushraj09',
    href: 'https://www.linkedin.com/in/ayushraj09/',
    actionText: 'Connect',
    accentColor: '#0a66c2',
    isExternal: true,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText('ayushraj.work9@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="relative py-32 bg-[#0a0a0a]">
      {/* Top divider */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,255,0,0.25), transparent)' }}
      />

      {/* Atmospheric ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(232,255,0,0.035) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
            Get In Touch
          </span>
          <h2
            className="font-display font-bold text-white leading-tight mt-4"
            style={{ fontSize: 'clamp(38px, 6vw, 76px)' }}
          >
            Have a Project in Mind?<br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)', WebkitTextFillColor: 'transparent' }}>
              {"Let's Create Something Great."}
            </span>
          </h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Available for YouTube content editing, viral Instagram reels, dynamic motion graphics, and creative freelance collaborations.
          </p>
        </motion.div>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="mailto:ayushraj.work9@gmail.com"
            className="group inline-flex items-center gap-3.5 px-9 py-4.5 bg-[#e8ff00] text-black font-display font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 hover:-translate-y-1 rounded-xs shadow-lg shadow-[#e8ff00]/10"
          >
            <Mail size={16} />
            <span>Send Me an Email</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-4 border border-white/15 hover:border-white/40 text-white/70 hover:text-white font-mono text-xs tracking-wider uppercase transition-all duration-300 rounded-xs bg-white/[0.02]"
          >
            {copied ? (
              <>
                <Check size={14} className="text-[#e8ff00]" />
                <span className="text-[#e8ff00]">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </motion.div>

        {/* The 3 Core Contact Cards (Email, Instagram, LinkedIn) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, i) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.isExternal ? '_blank' : '_self'}
                rel={contact.isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="p-6 border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04] group transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xs flex items-center justify-center transition-all duration-300"
                      style={{
                        background: `${contact.accentColor}15`,
                        border: `1px solid ${contact.accentColor}35`,
                      }}
                    >
                      <Icon size={20} style={{ color: contact.accentColor }} />
                    </div>

                    <span className="font-mono text-[10px] tracking-widest uppercase text-white/30 group-hover:text-white/60 transition-colors">
                      {contact.actionText} →
                    </span>
                  </div>

                  <div className="font-display font-semibold text-white text-base group-hover:text-[#e8ff00] transition-colors duration-300">
                    {contact.label}
                  </div>

                  <div className="font-mono text-xs text-white/50 mt-1 break-all">
                    {contact.handle}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/30">
                  <span>Connect with Ayush</span>
                  <span className="text-[#e8ff00] opacity-0 group-hover:opacity-100 transition-opacity">
                    Active
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Clean bottom status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e8ff00] animate-pulse" />
            <span className="text-white/70">ayushraj.work9@gmail.com</span>
            <span>· Fast response guaranteed</span>
          </div>

          <div className="text-white/40">
            Freelance & Long-Term Client Projects · Remote Worldwide
          </div>
        </motion.div>
      </div>
    </section>
  )
}
