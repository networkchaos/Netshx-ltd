import React, { useEffect, useRef } from 'react'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const expertiseTags = [
    'Ethical Hacking',
    'Smart Contract Auditing',
    'Penetration Testing',
    'System Security',
    'Web Development',
    'Server Management'
  ]

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About NETSHX</h2>
        <div className="about-content">
          <div className="company-intro">
            <h3>Who We Are</h3>
            <p>
              NETSHX LTD is a premier cybersecurity and technology solutions company at the forefront 
              of digital security innovation. We specialize in protecting businesses from emerging threats 
              while enabling them to leverage cutting-edge technologies safely and securely.
            </p>
            <p>
              Our mission is to empower organizations with robust security frameworks, comprehensive 
              smart contract audits, and strategic IT solutions that drive growth while maintaining the 
              highest standards of security and compliance.
            </p>
          </div>
          
          <div className="company-values">
            <h3>Our Core Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🔒</div>
                <h4>Security First</h4>
                <p>We prioritize security in every solution we deliver</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🚀</div>
                <h4>Innovation</h4>
                <p>Staying ahead of emerging threats and technologies</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Partnership</h4>
                <p>Building long-term relationships with our clients</p>
              </div>
              <div className="value-item">
                <div className="value-icon">✨</div>
                <h4>Excellence</h4>
                <p>Delivering exceptional results on every project</p>
              </div>
            </div>
          </div>

          <div className="founder-section">
            <h3>Our Founder</h3>
            <div className="founder-info">
              <div className="founder-details">
                <h4>George Kinyanjui <span className="nickname">(0x46._)</span></h4>
                <p className="role">Founder & Lead Consultant</p>
                <p>
                  George Kinyanjui is a seasoned cybersecurity professional and tech consultant with
                  extensive expertise in ethical hacking, smart contract auditing, and system security.
                  With a deep understanding of both traditional cybersecurity practices and cutting-edge
                  blockchain technologies, George brings a unique perspective to every project.
                </p>
                <p>
                  His comprehensive skill set spans penetration testing, smart contract security auditing,
                  web development, and server management. Under his leadership, NETSHX has become a trusted
                  partner for businesses seeking world-class security solutions.
                </p>
                <div className="expertise-tags">
                  {expertiseTags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

