import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

const typeColors: Record<string, string> = {
  Healthcare: '#10b981',
  'Telecommunications & CRM': '#3b82f6',
  Streaming: '#8b5cf6',
  'Fintech / Telecom': '#f59e0b',
  Education: '#06b6d4',
  Telecommunications: '#3b82f6',
  'Telecommunications & Banking': '#f43f5e',
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background orb */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Work Experience</span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 mt-4">
            7+ years of building enterprise systems across multiple industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(180deg, #8b5cf6, #06b6d4, rgba(6,182,212,0))',
              transform: 'translateX(-50%)',
            }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
          />

          <div className="space-y-8">
            {data.experience.map((exp, i) => {
              const isLeft = i % 2 === 0
              const color = typeColors[exp.type] || '#8b5cf6'

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-current z-10"
                    style={{ color, background: '#030303', borderColor: color, boxShadow: `0 0 12px ${color}60` }} />

                  {/* Date — desktop */}
                  <div className={`hidden md:flex w-[calc(50%-2rem)] ${isLeft ? 'justify-end text-right' : 'justify-start text-left'}`}>
                    <div className="pr-8 pl-4">
                      <span className="text-xs font-semibold font-heading tracking-widest uppercase"
                        style={{ color }}>
                        {exp.duration}
                      </span>
                      <div className="text-xs text-gray-600 mt-0.5">{exp.type}</div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="ml-10 md:ml-0 md:w-[calc(50%-2rem)] md:pl-8">
                    <div className="glass rounded-xl p-5 gradient-border card-lift group">
                      {/* Mobile date */}
                      <div className="md:hidden mb-2">
                        <span className="text-xs font-semibold" style={{ color }}>{exp.duration}</span>
                      </div>

                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-heading font-semibold text-white text-base leading-snug">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-medium mt-0.5" style={{ color }}>
                            {exp.company}
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full flex-shrink-0 font-medium"
                          style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
                          {exp.type.split(' ')[0]}
                        </span>
                      </div>

                      <div className="text-xs text-gray-500 font-medium mb-3 italic">{exp.project}</div>

                      <ul className="space-y-1.5 mb-4">
                        {exp.highlights.slice(0, 3).map((h, j) => (
                          <li key={j} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                            <span className="flex-shrink-0 mt-0.5" style={{ color }}>›</span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.stack.slice(0, 6).map(tech => (
                          <span key={tech}
                            className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#9ca3af' }}>
                            {tech}
                          </span>
                        ))}
                        {exp.stack.length > 6 && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full text-gray-600"
                            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            +{exp.stack.length - 6}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
