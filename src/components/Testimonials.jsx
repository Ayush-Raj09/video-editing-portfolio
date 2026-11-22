import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ExternalLink, Play, Pause, Volume2, VolumeX, CheckCircle, TrendingUp, Sparkles } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showProofModal, setShowProofModal] = useState(false)

  const toggleVideoPlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section id="testimonials" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,255,0,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
              Verified Client Review & Video Testimonial
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-bold text-5xl md:text-7xl text-white leading-none">
              CLIENT<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
                VERDICT
              </span>
            </h2>
            <p className="text-white/45 max-w-sm text-sm leading-relaxed">
              Real feedback from creators I collaborate with. No fabricated reviews — watch the video recording and inspect live performance metrics below.
            </p>
          </div>
        </motion.div>

        {/* Main Testimonial Showcase: Dual Layout (Video Proof + Quote & Studio Analytics) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Playable Video Testimonial (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 border border-white/10 bg-white/[0.02] p-4 rounded-sm relative group"
          >
            <div className="relative aspect-[9/16] bg-black rounded-sm overflow-hidden border border-white/5 shadow-2xl">
              <video
                ref={videoRef}
                src="/videos/review_video.mp4"
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
                onClick={toggleVideoPlay}
              />

              {/* Gradient shadow overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 transition-opacity duration-300 pointer-events-none ${
                  isPlaying ? 'opacity-20' : 'opacity-80'
                }`}
              />

              {/* Center Play Button if paused */}
              {!isPlaying && (
                <div
                  onClick={toggleVideoPlay}
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-18 h-18 rounded-full bg-[#e8ff00] text-black flex items-center justify-center shadow-xl shadow-black/80"
                  >
                    <Play size={28} fill="currentColor" className="ml-1" />
                  </motion.div>
                  <span className="font-mono text-xs text-white tracking-widest uppercase mt-3 bg-black/60 px-3 py-1 rounded-xs backdrop-blur-sm">
                    Watch Video Review
                  </span>
                </div>
              )}

              {/* In-Video Controls & Tag */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="font-mono text-[9px] tracking-widest uppercase bg-black/80 text-[#e8ff00] border border-[#e8ff00]/40 px-2 py-1 rounded-xs backdrop-blur-md flex items-center gap-1">
                  <CheckCircle size={10} />
                  LIVE TESTIMONIAL
                </span>

                <button
                  onClick={toggleMute}
                  className="pointer-events-auto w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#e8ff00] hover:text-black transition-colors backdrop-blur-md"
                  aria-label="Toggle mute"
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>

              {/* Bottom Caption inside Video */}
              <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                <div className="bg-black/80 backdrop-blur-md p-3 rounded-xs border border-white/10">
                  <div className="font-display font-bold text-sm text-white">Ratish (SelfImprover)</div>
                  <div className="font-mono text-[10px] text-[#e8ff00] tracking-wide mt-0.5">
                    "Those are the most high-performing videos on my channel."
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-white/40 font-mono px-1">
              <span>Recorded October 2025</span>
              <span>100% Authentic Recording</span>
            </div>
          </motion.div>

          {/* Right Column: Verbatim Quote & Studio Proof (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* The Main Quote Box */}
            <div className="p-8 md:p-10 border border-[#e8ff00]/20 bg-[#e8ff00]/[0.02] relative rounded-sm overflow-hidden">
              {/* Giant decorative quotation mark */}
              <div
                className="absolute -top-10 -right-2 font-display font-bold text-[180px] leading-none select-none pointer-events-none opacity-[0.04]"
                style={{ color: '#e8ff00' }}
              >
                "
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#e8ff00" className="text-[#e8ff00]" />
                ))}
                <span className="font-mono text-xs text-[#e8ff00] ml-2 tracking-wider">
                  5.0 / 5.0 RATING
                </span>
              </div>

              {/* Verbatim Word-for-Word Transcript */}
              <blockquote className="space-y-4 text-white/80 leading-relaxed text-base md:text-lg">
                <p className="font-normal italic">
                  "Ayush has been editing two of my videos, and I can say that <span className="text-[#e8ff00] font-semibold not-italic">those are the most high-performing videos on my channel</span>. The second one got literally 10k views — that was the most highest performing video on my channel."
                </p>

                <p className="font-normal italic text-white/70">
                  "In this video, he edited very precisely, very greatly. <span className="text-white font-medium not-italic">Bahut accha editor hai, bahut acche se samjha ki maine isko kya banane ko bola tha, exact waise cheez bana ke di.</span> Very shocked with the results, bahut accha experience, and I loved working with him."
                </p>
              </blockquote>

              {/* Creator Attribution */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 to-red-800 flex items-center justify-center font-display font-bold text-white text-base shadow-md">
                    SI
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">SelfImprover (Ratish)</h4>
                    <a
                      href="https://www.youtube.com/@SelfImprover420"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#e8ff00] hover:text-white transition-colors flex items-center gap-1 mt-0.5"
                    >
                      <span>@SelfImprover420</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#e8ff00] bg-[#e8ff00]/10 border border-[#e8ff00]/30 px-3 py-1.5 rounded-xs flex items-center gap-1.5">
                    <CheckCircle size={12} />
                    VERIFIED CLIENT
                  </span>
                </div>
              </div>
            </div>

            {/* Studio Analytics Proof Card */}
            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-[#e8ff00]" />
                  <span className="font-mono text-xs tracking-widest uppercase text-white font-semibold">
                    Live Performance Proof (YouTube Studio)
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/40 tracking-wider">
                  Verified Data
                </span>
              </div>

              {/* Metric stats row */}
              <div className="grid grid-cols-3 gap-4 mb-5 pt-1">
                <div className="p-3 bg-black/50 border border-white/5 rounded-xs">
                  <div className="font-mono text-[10px] text-white/40 uppercase">Channel Rank</div>
                  <div className="font-display font-bold text-xl text-[#e8ff00] mt-1">#1 of 10</div>
                  <div className="text-[10px] text-green-400 mt-0.5">Top Performer</div>
                </div>

                <div className="p-3 bg-black/50 border border-white/5 rounded-xs">
                  <div className="font-mono text-[10px] text-white/40 uppercase">Total Views</div>
                  <div className="font-display font-bold text-xl text-white mt-1">10.8K+</div>
                  <div className="text-[10px] text-green-400 mt-0.5">↑ Trending Up</div>
                </div>

                <div className="p-3 bg-black/50 border border-white/5 rounded-xs">
                  <div className="font-mono text-[10px] text-white/40 uppercase">Click-Through (CTR)</div>
                  <div className="font-display font-bold text-xl text-white mt-1">6.7%</div>
                  <div className="text-[10px] text-green-400 mt-0.5">↑ High Conversion</div>
                </div>
              </div>

              {/* Analytics Screenshot Thumbnail with Zoom */}
              <div className="flex items-center gap-4 p-3 bg-black/70 border border-white/5 rounded-xs">
                <div
                  className="relative w-28 h-18 overflow-hidden rounded-xs border border-white/10 shrink-0 cursor-pointer group/img"
                  onClick={() => setShowProofModal(true)}
                >
                  <img
                    src="/images/ratish.jpg"
                    alt="YouTube Studio Analytics Proof"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover/img:bg-transparent transition-colors flex items-center justify-center">
                    <span className="font-mono text-[8px] bg-black/80 text-white px-1 py-0.5 rounded-xs">Click to Zoom</span>
                  </div>
                </div>

                <div>
                  <div className="font-display font-semibold text-sm text-white">
                    "How To Fix Your Recessed Chin (Full Guide)"
                  </div>
                  <p className="text-white/40 text-xs mt-1">
                    Premiered on channel & edited by Ayush Raj. Ranked #1 among all 10 recent videos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Analytics Screenshot Modal */}
      {showProofModal && (
        <div
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowProofModal(false)}
        >
          <div className="relative max-w-md w-full bg-black border border-white/20 p-2 rounded-sm" onClick={(e) => e.stopPropagation()}>
            <img src="/images/ratish.jpg" alt="Full Analytics Screenshot" className="w-full rounded-sm" />
            <div className="mt-3 p-2 flex items-center justify-between text-xs font-mono text-white/60">
              <span>YouTube Studio Verified Screenshot</span>
              <button onClick={() => setShowProofModal(false)} className="text-[#e8ff00] hover:text-white uppercase">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
