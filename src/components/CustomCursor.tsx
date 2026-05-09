import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer'
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleOver)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [isVisible])

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          width: 6,
          height: 6,
          background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
          x: position.x - 3,
          y: position.y - 3,
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border"
        style={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          borderColor: isHovering ? 'rgba(139,92,246,0.6)' : 'rgba(139,92,246,0.3)',
          background: isHovering ? 'rgba(139,92,246,0.06)' : 'transparent',
        }}
        animate={{
          x: position.x - (isHovering ? 24 : 16),
          y: position.y - (isHovering ? 24 : 16),
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
      />
    </>
  )
}
