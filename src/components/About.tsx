import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  return (
    <span className="font-heading font-bold text-4xl sm:text-5xl text-gradient">
      {target}{suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="section-tag">About Me</span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3">
              Crafting <span className="text-gradient">Digital Experiences</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {data.profile}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: '📧', label: 'Email', value: data.email },
                  { icon: '📍', label: 'Location', value: data.location },
                  { icon: '🐙', label: 'GitHub', value: data.github },
                  { icon: '🌐', label: 'Languages', value: 'ID (Fluent) · EN (Int.)' },
                ].map(item => (
                  <div key={item.label} className="glass rounded-xl p-4 glass-hover">
                    <div className="text-xl mb-2">{item.icon}</div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-sm text-gray-200 font-medium break-all">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a href={data.cvFile} download className="btn-primary text-sm flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download CV
                </a>
                <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Right — Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {data.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-8 text-center card-lift gradient-border"
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                  <div className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</div>
                </motion.div>
              ))}

              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
                className="col-span-2 glass rounded-2xl p-6 gradient-border"
              >
                <div className="text-xs text-gray-500 font-medium uppercase tracking-widest mb-3">Industries</div>
                <div className="flex flex-wrap gap-2">
                  {['Telecommunications', 'Healthcare', 'Fintech', 'Streaming', 'Education', 'Publishing'].map(ind => (
                    <span key={ind}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#a78bfa' }}>
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
