import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, Play, ExternalLink } from 'lucide-react'
import { projects, categories } from '../data/projects'

function ProjectCard({ project, onClick, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden bg-[#111] aspect-video">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <Play size={20} fill="white" className="text-white ml-0.5" />
          </div>
        </div>

        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 bg-black/70 text-[#e8ff00] border border-[#e8ff00]/30">
            {project.category}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 bg-[#e8ff00] text-black font-bold">
              FEATURED
            </span>
          </div>
        )}

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className="pt-5 pb-2">
        <div className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-1">
          {project.tags.join(' · ')}
        </div>
        <h3 className="font-display font-semibold text-lg text-white group-hover:text-[#e8ff00] transition-colors duration-300">
          {project.title}
        </h3>
        <div className="text-sm text-white/40 mt-1">Role: {project.role}</div>
      </div>
    </motion.article>
  )
}

function VideoModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2 font-mono text-xs tracking-widest uppercase"
          >
            <X size={16} />
            Close
          </button>

          {/* Video */}
          <div className="relative aspect-video bg-black rounded-sm overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Project info */}
          <div className="mt-6 flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="font-mono text-xs tracking-widest uppercase text-[#e8ff00] mb-2">
                {project.category}
              </div>
              <h3 className="font-display font-bold text-2xl text-white">{project.title}</h3>
              <p className="text-white/50 text-sm mt-2 max-w-2xl">{project.description}</p>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/60 hover:border-[#e8ff00] hover:text-[#e8ff00] transition-all duration-300 font-mono text-xs tracking-widest uppercase"
            >
              <ExternalLink size={13} />
              Watch on YouTube
            </a>
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
  const isInView = useInView(ref, { once: true })

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="work" className="relative py-32 bg-[#0a0a0a]">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
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
            Portfolio
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-4">
            <h2 className="font-display font-bold text-5xl md:text-7xl text-white leading-none">
              SELECTED<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', WebkitTextFillColor: 'transparent' }}>
                WORKS
              </span>
            </h2>
            <p className="text-white/40 max-w-xs text-sm leading-relaxed">
              A curated selection of my editing work. Each project represents a unique story, rhythm, and visual experience.
            </p>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#e8ff00] text-black'
                  : 'border border-white/10 text-white/40 hover:border-white/30 hover:text-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
                index={i}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Placeholder notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 p-6 border border-white/5 bg-white/[0.02] rounded-sm"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-[#e8ff00] mb-2">
            📂 More Work Coming Soon
          </div>
          <p className="text-white/40 text-sm">
            Additional editing samples (Instagram Reels, Gaming Edits, Motion Graphics) will be added
            once assets from the Google Drive folder are confirmed and organized. The two featured YouTube videos
            above are live and verified.
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
