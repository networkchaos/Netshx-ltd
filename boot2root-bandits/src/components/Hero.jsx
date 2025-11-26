import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '1'
      heroRef.current.style.transform = 'translateY(0)'
    }
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="team-logo">
            <span className="logo-text">B2R</span>
          </div>
          <h1 className="hero-title">
            <span className="glitch" data-text="Boot2RootBandits">Boot2RootBandits</span>
          </h1>
          <p className="hero-tagline">FROM BOOT TO ROOT, WE DOMINATE</p>
          <p className="hero-subtitle">Elite Cybersecurity Team | CTF Champions | Ethical Hackers</p>
          <p className="hero-description">
            A premier hacking team specializing in Capture The Flag competitions, 
            penetration testing, and cybersecurity research. We push boundaries, 
            solve complex challenges, and share knowledge with the community.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">#94</div>
              <div className="stat-label">Global CTF Rank</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4th</div>
              <div className="stat-label">Daystar CTF</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12th</div>
              <div className="stat-label">BSides Nairobi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

