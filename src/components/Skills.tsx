import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

const levelStyle: Record<string, { color: string; bg: string; bar: string }> = {
  Expert: { color: '#10b981', bg: 'rgba(16,185,129,0.1)', bar: 'linear-gradient(90deg,#10b981,#059669)' },
  Advanced: { color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', bar: 'linear-gradient(90deg,#3b82f6,#2563eb)' },
  Intermediate: { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', bar: 'linear-gradient(90deg,#f59e0b,#d97706)' },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...data.skillCategories.map(c => c.category)]
  const filtered = activeCategory === 'All'
    ? data.skillCategories
    : data.skillCategories.filter(c => c.category === activeCategory)

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">Technical Skills</span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A curated collection of technologies I've mastered across frontend, backend, cloud, and real-time systems.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-heading font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'text-white shadow-lg'
                  : 'text-gray-400 hover:text-white glass'
              }`}
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', boxShadow: '0 4px 20px rgba(139,92,246,0.3)' }
                : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + ci * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-6 gradient-border card-lift"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-heading font-semibold text-white text-lg">{category.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, si) => {
                  const style = levelStyle[skill.level] || levelStyle.Intermediate
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ color: style.color, background: style.bg }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {/* Bar */}
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: style.bar }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.percent}%` } : { width: 0 }}
                          transition={{ delay: 0.3 + ci * 0.08 + si * 0.05, duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badges — all skills at a glance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="text-xs text-gray-600 uppercase tracking-widest mb-4 font-medium">Also experienced with</div>
          <div className="flex flex-wrap justify-center gap-2">
            {['Kafka', 'Jenkins', 'NGINX', 'Gunicorn', 'ORM', 'Redux-Saga', 'Vite', 'Microservices', 'REST API', 'UML', 'Figma', 'Jira'].map(tech => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full text-gray-400"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
