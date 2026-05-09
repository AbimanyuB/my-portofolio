import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

function ProjectCard({ project, index, inView }: {
  project: typeof data.portfolio[0]
  index: number
  inView: boolean
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const cx = (e.clientX - rect.left) / rect.width - 0.5
    const cy = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: cy * -10, y: cx * 10 })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: 'easeOut' }}
      style={{
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      className="relative glass rounded-2xl overflow-hidden group"
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Glow on hover */}
      {hovered && (
        <div
          className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl"
          style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)` }}
        />
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full mb-2 inline-block"
              style={{ background: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}30` }}
            >
              {project.category}
            </span>
            <h3 className="font-heading font-bold text-xl text-white mt-1">{project.name}</h3>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: `${project.accent}15`,
              border: `1px solid ${project.accent}30`,
              color: project.accent,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#9ca3af',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="mt-5 pt-4 border-t border-white/5">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold font-heading transition-all duration-200 hover:gap-3"
            style={{ color: project.accent }}
          >
            Visit Project
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      {/* Orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of production-grade applications built for real-world enterprise clients across multiple domains.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.portfolio.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
