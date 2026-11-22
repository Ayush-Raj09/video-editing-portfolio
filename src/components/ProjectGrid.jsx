import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, Play, ExternalLink, Sparkles, Film, Smartphone } from 'lucide-react'
import { projects, categories } from '../data/projects'

function ProjectCard({ project, onClick, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })
  const isVertical = project.aspect === '9/16'

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group cursor-pointer flex flex-col justify-between border border-white/5 hover:border-[#e8ff00]/40 transition-colors duration-400 bg-white/[0.015] hover:bg-white/[0.03] p-3 rounded-sm ${
        isVertical ? 'md:col-span-1' : 'md:col-span-2'
      }`}
      onClick={() => onClick(project)}
    >
      {/* Media container */}
      <div
        className={`relative overflow-hidden bg-black rounded-sm w-full ${
          isVertical ? 'aspect-[9/16]' : 'aspect-video'
        }`}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            if (project.youtubeId) {
              e.currentTarget.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
            }
          }}
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20 opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Play Icon Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-14 h-14 rounded-full border border-white/50 group-hover:border-[#e8ff00] flex items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:bg-[#e8ff00] group-hover:text-black shadow-lg shadow-black/60"
          >
            <Play size={20} fill="currentColor" className="ml-0.5 text-white group-hover:text-black transition-colors" />
          </motion.div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 bg-black/80 text-[#e8ff00] border border-[#e8ff00]/30 backdrop-blur-md rounded-xs flex items-center gap-1.5">
            {isVertical ? <Smartphone size={10} /> : <Film size={10} />}
            {project.category}
          </span>
          {project.featured && (
            <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 bg-[#e8ff00] text-black font-bold rounded-xs flex items-center gap-1 shadow-sm">
              <Sparkles size={9} />
              FEATURED
            </span>
          )}
        </div>

        {/* Bottom stats / aspect indicator */}
        {project.stats && (
          <div className="absolute bottom-3 left-3 right-3">
            <span className="font-mono text-[10px] tracking-wide text-white/90 bg-black/80 px-2 py-1 border border-white/10 rounded-xs backdrop-blur-md">
              {project.stats}
            </span>
          </div>
        )}
      </div>

      {/* Info Content */}
      <div className="pt-4 pb-2 px-1">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
            {project.tags.join(' · ')}
          </span>
        </div>

        <h3 className="font-display font-semibold text-base md:text-lg text-white group-hover:text-[#e8ff00] transition-colors duration-300 leading-snug">
          {project.title}
        </h3>

        <p className="text-white/45 text-xs line-clamp-2 mt-2 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-white/35 font-mono">
          <span>Role: {project.role.split(',')[0]}</span>
          <span className="text-[#e8ff00]/80 group-hover:text-[#e8ff00] transition-colors flex items-center gap-1">
            Play <Play size={10} fill="currentColor" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}

function VideoModal({ project, onClose }) {
  if (!project) return null
  const isVertical = project.aspect === '9/16'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/92 backdrop-blur-2xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full z-10 flex flex-col ${
            isVertical ? 'max-w-md' : 'max-w-5xl'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top header bar */}
          <div className="flex items-center justify-between pb-3 text-white/70">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 bg-[#e8ff00] text-black font-bold rounded-xs">
                {project.category}
              </span>
              <span className="font-mono text-xs text-white/40">
                {isVertical ? '9:16 Vertical Short-Form' : '16:9 Widescreen'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded-xs"
            >
              <X size={15} />
              Close
            </button>
          </div>

          {/* Video Player Box */}
          <div
            className={`relative bg-black rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-black ${
              isVertical ? 'aspect-[9/16] max-h-[72vh] mx-auto w-full' : 'aspect-video w-full'
            }`}
          >
            {project.type === 'youtube' ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={project.embedUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Bottom Info */}
          <div className="mt-4 p-4 bg-white/[0.03] border border-white/10 rounded-sm">
            <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
            <p className="text-white/60 text-xs mt-1.5 leading-relaxed">{project.description}</p>
            
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="text-white/40 font-mono">Role: {project.role}</span>
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#e8ff00] hover:text-white font-mono text-xs tracking-wider uppercase transition-colors"
              >
                {project.type === 'youtube' ? 'Open on YouTube' : 'Open in Google Drive'}
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  // Long-form vs vertical counts
  const longCount = projects.filter(p => p.category === 'YouTube Long-Form').length
  const reelCount = projects.filter(p => p.category === 'Instagram Reels').length
  const shortCount = projects.filter(p => p.category === 'YouTube Shorts').length
  const motionCount = projects.filter(p => p.category === 'Motion & Transitions').length

  return (
    <section id="work" className="relative py-32 bg-[#0a0a0a]">
      {/* Top divider */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(232,255,0,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8ff00]">
              Full Portfolio ({projects.length} Verified Works)
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-bold text-5xl md:text-7xl text-white leading-none">
              SELECTED<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
                WORKS & CUTS
              </span>
            </h2>
            <p className="text-white/50 max-w-sm text-sm leading-relaxed">
              Every project featured here is actual client & personal editing work — spanning high-retention long-form YouTube cuts, viral 9:16 Instagram reels, and dynamic motion transitions.
            </p>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2.5 mb-12"
        >
          {categories.map((cat) => {
            let count = projects.length
            if (cat === 'YouTube Long-Form') count = longCount
            else if (cat === 'Instagram Reels') count = reelCount
            else if (cat === 'YouTube Shorts') count = shortCount
            else if (cat === 'Motion & Transitions') count = motionCount

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded-xs flex items-center gap-2 ${
                  activeCategory === cat
                    ? 'bg-[#e8ff00] text-black font-bold shadow-md shadow-[#e8ff00]/10'
                    : 'border border-white/10 text-white/50 hover:border-white/30 hover:text-white bg-white/[0.02]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategory === cat ? 'bg-black text-[#e8ff00]' : 'bg-white/10 text-white/60'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Dynamic Responsive Grid: Supports both 16:9 Longform (2 cols) and 9:16 Reels (1 col each) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Lightbox Modal */}
      {selectedProject && (
        <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
