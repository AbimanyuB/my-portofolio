import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { data } from '../data/portfolio'

const contacts = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: data.email,
    href: `mailto:${data.email}`,
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: data.phone,
    href: `tel:${data.phone.replace(/\s/g, '')}`,
    color: '#06b6d4',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: data.github,
    href: data.githubUrl,
    color: '#10b981',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: data.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(data.location)}`,
    color: '#f59e0b',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="section-tag">Contact</span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === 'GitHub' || c.label === 'Location' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 glass rounded-xl p-5 gradient-border card-lift group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color }}
              >
                {c.icon}
              </div>
              <div className="overflow-hidden">
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">{c.label}</div>
                <div className="text-sm text-gray-200 font-medium truncate">{c.value}</div>
              </div>
              <div className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: c.color }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative glass rounded-2xl p-8 text-center overflow-hidden"
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-2xl p-px"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(6,182,212,0.4))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }} />

          {/* Glow */}
          <div className="absolute inset-0 opacity-5 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }} />

          <div className="relative z-10">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-heading font-bold text-2xl text-white mb-3">Ready to Build Something Great?</h3>
            <p className="text-gray-400 mb-6 max-w-sm mx-auto text-sm">
              Whether it's a new project, a technical challenge, or a leadership role — I'm ready.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`mailto:${data.email}`} className="btn-primary text-sm">
                Send an Email
              </a>
              <a href={data.cvFile} download className="btn-outline text-sm flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
