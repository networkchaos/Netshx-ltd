import React, { useEffect, useRef, useState } from 'react'

const InteractiveBackground = () => {
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const particlesRef = useRef([])
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create dragon-like particle system
    const createParticle = (x, y) => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        life: 1,
        decay: Math.random() * 0.02 + 0.005
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push(
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      )
    }

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      
      // Add particles at mouse position
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push(
          createParticle(e.clientX, e.clientY)
        )
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= particle.decay
        
        // Attract to mouse (dragon follows cursor)
        const dx = mousePos.x - particle.x
        const dy = mousePos.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 250 && mousePos.x > 0 && mousePos.y > 0) {
          const force = (250 - distance) / 250
          // Stronger attraction for closer particles (dragon head effect)
          const attractionStrength = distance < 100 ? 0.15 : 0.08
          particle.vx += (dx / distance) * force * attractionStrength
          particle.vy += (dy / distance) * force * attractionStrength
        }
        
        // Friction
        particle.vx *= 0.98
        particle.vy *= 0.98
        
        // Draw particle
        if (particle.life > 0) {
          const alpha = particle.life
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 255, 157, ${alpha * 0.6})`
          ctx.fill()
          
          // Glow effect
          ctx.shadowBlur = 10
          ctx.shadowColor = 'rgba(0, 255, 157, 0.8)'
          ctx.fill()
          ctx.shadowBlur = 0
        }
        
        return particle.life > 0
      })
      
      // Connect nearby particles to form dragon-like shape
      // Sort particles by distance from mouse for better dragon effect
      const sortedParticles = [...particlesRef.current].sort((a, b) => {
        const distA = Math.sqrt((a.x - mousePos.x) ** 2 + (a.y - mousePos.y) ** 2)
        const distB = Math.sqrt((b.x - mousePos.x) ** 2 + (b.y - mousePos.y) ** 2)
        return distA - distB
      })
      
      // Connect particles in sequence to form dragon body
      for (let i = 0; i < sortedParticles.length - 1 && i < 25; i++) {
        const p1 = sortedParticles[i]
        const p2 = sortedParticles[i + 1]
        const dx = p2.x - p1.x
        const dy = p2.y - p1.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 120) {
          const alpha = (1 - distance / 120) * p1.life * p2.life * 0.5
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(0, 255, 157, ${alpha})`
          ctx.lineWidth = 1.5
          ctx.shadowBlur = 5
          ctx.shadowColor = 'rgba(0, 255, 157, 0.5)'
          ctx.stroke()
          ctx.shadowBlur = 0
        }
      }
      
      // Maintain particle count
      while (particlesRef.current.length < 50) {
        particlesRef.current.push(
          createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        )
      }
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePos])

  return (
    <canvas
      ref={canvasRef}
      className="interactive-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.4
      }}
    />
  )
}

export default InteractiveBackground

