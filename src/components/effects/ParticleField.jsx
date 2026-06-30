import { useEffect, useRef } from 'react'
import useReducedMotion from '../../hooks/useReducedMotion'

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2.2 + 0.6,
    speedY: Math.random() * 0.25 + 0.08,
    speedX: (Math.random() - 0.5) * 0.12,
    opacity: Math.random() * 0.45 + 0.15,
    twinkle: Math.random() * Math.PI * 2,
    twinkleSpeed: Math.random() * 0.02 + 0.008,
    hue: Math.random() > 0.7 ? 'gold' : 'warm',
  }
}

export default function ParticleField({ className = '', density = 38, active = true }) {
  const canvasRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!active || reducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let frameId = 0
    let particles = []

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = parent.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: density }, () => createParticle(width, height))
    }

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.y -= p.speedY
        p.x += p.speedX
        p.twinkle += p.twinkleSpeed

        if (p.y < -4) {
          p.y = height + 4
          p.x = Math.random() * width
        }
        if (p.x < -4) p.x = width + 4
        if (p.x > width + 4) p.x = -4

        const alpha = p.opacity * (0.55 + Math.sin(p.twinkle) * 0.45)
        const color =
          p.hue === 'gold'
            ? `rgba(212, 175, 55, ${alpha})`
            : `rgba(255, 235, 210, ${alpha * 0.9})`

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        if (p.size > 1.8) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212, 175, 55, ${alpha * 0.15})`
          ctx.fill()
        }
      })

      frameId = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
    }
  }, [active, density, reducedMotion])

  if (reducedMotion || !active) return null

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-[2] ${className}`}
      aria-hidden="true"
    />
  )
}
