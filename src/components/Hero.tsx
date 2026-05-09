import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { data } from '../data/portfolio'

const roles = ['Tech Lead', 'Senior Fullstack Developer', 'Software Architect', 'Team Builder']

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < current.length) {
      timer = setTimeout(() => setCharIndex(c => c + 1), speed)
    } else if (!deleting && charIndex === current.length) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex(c => c - 1), speed / 2)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex(w => (w + 1) % words.length)
    }

    setText(current.slice(0, charIndex))
    return () => clearTimeout(timer)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const role = useTypewriter(roles)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle at center, rgba(139,92,246,0.5) 0%, transparent 65%)' }} />
        <div className="orb-2 absolute top-1/4 -right-24 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle at center, rgba(6,182,212,0.5) 0%, transparent 65%)' }} />
        <div className="orb-3 absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle at center, rgba(244,114,182,0.4) 0%, transparent 65%)' }} />
        {/* Grid */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {/* Vignette */}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(3,3,3,0.8) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Tag */}
            <motion.div variants={itemVariants}>
              <span className="section-tag">👋 Available for Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mt-4"
            >
              Hi, I'm{' '}
              <span className="block text-gradient">
                {data.name.split(' ')[0]}
              </span>
              <span className="block text-white text-4xl sm:text-5xl lg:text-6xl mt-1">
                {data.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div variants={itemVariants} className="mt-6 h-10 flex items-center">
              <span className="font-heading text-xl sm:text-2xl text-gray-300">
                {role}
                <span className="cursor-blink text-purple-400 ml-0.5">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
              Architecting <span className="text-white font-medium">scalable enterprise systems</span> with 7+ years of experience.
              Building high-performance platforms across <span className="text-white font-medium">telecom, healthcare & fintech</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              <a href={data.cvFile} download className="btn-primary flex items-center gap-2 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
              <a href="#portfolio" className="btn-outline flex items-center gap-2 text-sm">
                View Portfolio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {data.stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-gradient">
                    {s.value}{s.suffix}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(6,182,212,0.3))' }} />
              {/* Terminal */}
              <div className="relative glass rounded-2xl overflow-hidden border border-white/8">
                {/* Terminal bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs text-gray-500 font-mono">profile.ts</span>
                </div>
                {/* Content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <TerminalCode />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-600 font-medium tracking-widest uppercase">Scroll</span>
        <div className="scroll-indicator w-0.5 h-8"
          style={{ background: 'linear-gradient(180deg, #8b5cf6, transparent)' }} />
      </div>
    </section>
  )
}

function TerminalCode() {
  const lines = [
    { type: 'comment', text: '// Abimanyu Bhamakerti' },
    { type: 'blank', text: '' },
    { type: 'keyword', text: 'const', rest: ' developer = {' },
    { type: 'prop', text: '  role', val: '"Tech Lead"' },
    { type: 'prop', text: '  exp', val: '"7+ years"' },
    { type: 'prop', text: '  location', val: '"Bogor, Indonesia"' },
    { type: 'blank', text: '' },
    { type: 'prop', text: '  stack', val: '[' },
    { type: 'arr', text: '    "React", "Node.js",' },
    { type: 'arr', text: '    "TypeScript", "Go",' },
    { type: 'arr', text: '    "PostgreSQL", "AWS"' },
    { type: 'arr2', text: '  ],' },
    { type: 'blank', text: '' },
    { type: 'prop', text: '  industries', val: '[' },
    { type: 'arr', text: '    "Telecom", "Healthcare",' },
    { type: 'arr', text: '    "Fintech", "Education"' },
    { type: 'arr2', text: '  ]' },
    { type: 'close', text: '}' },
  ]

  return (
    <div>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.05 }}
          className="flex"
        >
          <span className="w-6 text-right mr-4 text-gray-700 select-none text-xs leading-6">{i + 1}</span>
          {line.type === 'comment' && (
            <span className="text-gray-600">{line.text}</span>
          )}
          {line.type === 'blank' && <span>&nbsp;</span>}
          {line.type === 'keyword' && (
            <span>
              <span className="text-purple-400">{line.text}</span>
              <span className="text-gray-300">{line.rest}</span>
            </span>
          )}
          {line.type === 'prop' && (
            <span>
              <span className="text-cyan-400">{line.text}</span>
              <span className="text-gray-400">: </span>
              <span className="text-amber-300">{line.val}</span>
              {!line.val?.endsWith('[') && <span className="text-gray-400">,</span>}
            </span>
          )}
          {(line.type === 'arr' || line.type === 'arr2') && (
            <span className={line.type === 'arr' ? 'text-green-400' : 'text-gray-300'}>{line.text}</span>
          )}
          {line.type === 'close' && <span className="text-gray-300">{line.text}</span>}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-4 flex items-center gap-2 text-green-400"
      >
        <span>▶</span>
        <span className="text-gray-500">Ready to build something great</span>
        <span className="cursor-blink">_</span>
      </motion.div>
    </div>
  )
}
