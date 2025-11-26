import React from 'react'

const Footer = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const target = document.getElementById(sectionId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="copyright">© 2025 NETSHX LTD – All Rights Reserved.</p>
            <a 
              href="/boot2root-bandits" 
              className="footer-b2r-link"
            >
              <span className="b2r-icon">🎯</span>
              Boot2RootBandits Team
            </a>
          </div>
          <nav className="footer-nav">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            <a 
              href="/boot2root-bandits" 
              className="footer-nav-b2r"
            >
              Boot2RootBandits
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer

