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
          <div className="footer-section">
            <h3>Boot2RootBandits</h3>
            <p>Elite cybersecurity team pushing the boundaries of ethical hacking and security research.</p>
            <div className="footer-social">
              <a href="https://github.com/networkchaos" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
              <a href="https://x.com/FkJijo" target="_blank" rel="noopener noreferrer" aria-label="X">
                X (Twitter)
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
              <a href="#specialties" onClick={(e) => handleNavClick(e, 'specialties')}>Specialties</a>
              <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')}>Achievements</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
              <a href="#blog" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a>
            </nav>
          </div>
          <div className="footer-section">
            <h4>Team Leader</h4>
            <p>George Kinyanjui (0x46._)</p>
            <p>Founder & Lead Security Researcher</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Boot2RootBandits – All Rights Reserved.</p>
          <p className="footer-tagline">From Boot to Root, We Dominate</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

