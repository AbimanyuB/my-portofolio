import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="section-tag">Education</span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-8 gradient-border card-lift group relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: i === 0 ? '#8b5cf6' : '#06b6d4' }} />

              <div className="relative z-10">
                {/* Short name badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-bold text-lg mb-5"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.05))'
                      : 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(6,182,212,0.05))',
                    border: `1px solid ${i === 0 ? 'rgba(139,92,246,0.3)' : 'rgba(6,182,212,0.3)'}`,
                    color: i === 0 ? '#a78bfa' : '#22d3ee',
                  }}
                >
                  {edu.short}
                </div>

                <div className="mb-1">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: i === 0 ? 'rgba(139,92,246,0.1)' : 'rgba(6,182,212,0.1)',
                      color: i === 0 ? '#a78bfa' : '#22d3ee',
                      border: `1px solid ${i === 0 ? 'rgba(139,92,246,0.25)' : 'rgba(6,182,212,0.25)'}`,
                    }}
                  >
                    {edu.degree}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mt-3 mb-1">{edu.field}</h3>
                <div className="text-gray-300 font-medium mb-3">{edu.institution}</div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {edu.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-6 gradient-border"
        >
          <div className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-4">Languages</div>
          <div className="flex flex-wrap gap-4">
            {data.languages.map(lang => (
              <div key={lang.lang} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full dot-decoration" />
                <span className="text-gray-200 font-medium text-sm">{lang.lang}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full text-gray-400"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
