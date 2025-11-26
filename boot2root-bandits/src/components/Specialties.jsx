import React, { useEffect, useRef } from 'react'

const Specialties = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.specialty-card')
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = '1'
                item.style.transform = 'translateY(0)'
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
      setTimeout(() => {
        const items = sectionRef.current?.querySelectorAll('.specialty-card')
        items?.forEach(item => {
          if (item.style.opacity === '0' || !item.style.opacity) {
            item.style.opacity = '1'
            item.style.transform = 'translateY(0)'
          }
        })
      }, 1000)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const specialties = [
    {
      icon: '🎯',
      title: 'Capture The Flag (CTF)',
      description: 'Expert CTF players with proven track record in competitive hacking. Specialized in exploitation, reverse engineering, cryptography, and web vulnerabilities.',
      skills: ['Exploitation', 'Reverse Engineering', 'Cryptography', 'Web Vulns']
    },
    {
      icon: '🔓',
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments including web application testing, network penetration testing, and vulnerability assessments.',
      skills: ['Web App Testing', 'Network Security', 'Vulnerability Assessment']
    },
    {
      icon: '🛡️',
      title: 'Ethical Hacking',
      description: 'Bug bounty hunting and responsible disclosure. Active on HackerOne with expertise in identifying and reporting security vulnerabilities.',
      skills: ['Bug Bounty', 'Security Analysis', 'Responsible Disclosure']
    },
    {
      icon: '🔍',
      title: 'Reverse Engineering',
      description: 'Deep analysis of malware, binaries, and software to understand functionality, identify vulnerabilities, and develop exploits.',
      skills: ['Malware Analysis', 'Binary Analysis', 'Exploit Development']
    },
    {
      icon: '🌐',
      title: 'Network Security',
      description: 'Network architecture design, security implementation, and network programming. CCNA certified with hands-on experience.',
      skills: ['Network Design', 'Security Protocols', 'Network Programming']
    },
    {
      icon: '⛓️',
      title: 'Smart Contract Auditing',
      description: 'Blockchain security expertise including smart contract auditing, vulnerability identification, and DeFi security assessments.',
      skills: ['Smart Contracts', 'DeFi Security', 'Blockchain Auditing']
    }
  ]

  return (
    <section id="specialties" className="specialties" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Our Specialties</h2>
        <p className="section-subtitle">Areas where we excel and push the boundaries</p>
        <div className="specialties-grid">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card">
              <div className="specialty-icon">{specialty.icon}</div>
              <h3>{specialty.title}</h3>
              <p>{specialty.description}</p>
              <div className="specialty-skills">
                {specialty.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialties

