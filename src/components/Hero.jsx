import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    // Fade in animation on mount
    if (heroRef.current) {
      heroRef.current.style.opacity = '1'
      heroRef.current.style.transform = 'translateY(0)'
    }
  }, [])

  const handleContactClick = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="company-logo">
            <svg viewBox="0 0 100 100" className="network-logo">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              {[...Array(16)].map((_, i) => {
                const angle = (i * 360) / 16;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 35 * Math.cos(rad);
                const y = 50 + 35 * Math.sin(rad);
                return (
                  <circle key={i} cx={x} cy={y} r="2" fill="currentColor"/>
                );
              })}
              {[...Array(16)].map((_, i) => {
                const angle1 = (i * 360) / 16;
                const angle2 = ((i + 3) * 360) / 16;
                const rad1 = (angle1 * Math.PI) / 180;
                const rad2 = (angle2 * Math.PI) / 180;
                const x1 = 50 + 35 * Math.cos(rad1);
                const y1 = 50 + 35 * Math.sin(rad1);
                const x2 = 50 + 35 * Math.cos(rad2);
                const y2 = 50 + 35 * Math.sin(rad2);
                return (
                  <line key={`line-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                );
              })}
            </svg>
          </div>
          <h1 className="hero-title">
            <span className="brand-slash">/</span>
            <span className="glitch" data-text="NETSHX">NETSHX</span>
          </h1>
          <p className="hero-tagline">UNLEASHING TOMORROW'S POSSIBILITIES, TODAY!</p>
          <p className="hero-subtitle">Securing Systems, Auditing Contracts, Building the Future</p>
          <p className="hero-description">
            Leading cybersecurity and tech solutions company delivering cutting-edge security services 
            for businesses navigating the digital frontier
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button" onClick={handleContactClick}>
              Contact Us
            </a>
            <a href="#services" className="cta-button secondary" onClick={(e) => {
              e.preventDefault();
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                const offsetTop = servicesSection.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
            }}>
              Our Services
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero

