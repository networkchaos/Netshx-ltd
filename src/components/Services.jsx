import React, { useEffect, useRef } from 'react'

const Services = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
      // Fallback: make visible after 1 second if observer doesn't trigger
      setTimeout(() => {
        const cards = sectionRef.current?.querySelectorAll('.service-card')
        cards?.forEach(card => {
          if (card.style.opacity === '0' || !card.style.opacity) {
            card.style.opacity = '1'
            card.style.transform = 'translateY(0)'
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

  const services = [
    {
      icon: '🔒',
      title: 'Smart Contract Auditing',
      description: 'Comprehensive security analysis of smart contracts to identify vulnerabilities, potential exploits, and ensure code integrity. Our audits follow industry best practices and cover all major blockchain platforms.',
      features: [
        'Vulnerability Assessment',
        'Gas Optimization',
        'Code Review & Analysis',
        'Security Best Practices'
      ],
      featured: true
    },
    {
      icon: '🛡️',
      title: 'Penetration Testing / Ethical Hacking',
      description: 'Simulated cyber attacks to identify security weaknesses in your systems, networks, and applications before malicious actors can exploit them.',
      features: [
        'Network Penetration Testing',
        'Web Application Security',
        'Social Engineering Tests',
        'Detailed Security Reports'
      ],
      featured: false
    },
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Modern, secure, and performant web applications built with security best practices from the ground up.',
      features: [
        'Responsive Design',
        'Security-First Approach',
        'Performance Optimization',
        'SEO Optimization'
      ],
      featured: false
    },
    {
      icon: '☁️',
      title: 'Server & Cloud Management',
      description: 'Expert management of your server infrastructure and cloud deployments with a focus on security, reliability, and performance.',
      features: [
        'Cloud Architecture',
        'Server Hardening',
        'Monitoring & Maintenance',
        'Disaster Recovery'
      ],
      featured: false
    },
    {
      icon: '🔐',
      title: 'IT Security Consulting',
      description: 'Strategic security consulting to help organizations build robust security postures and comply with industry standards.',
      features: [
        'Security Strategy',
        'Risk Assessment',
        'Compliance Guidance',
        'Security Training'
      ],
      featured: false
    }
  ]

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive cybersecurity and technology solutions tailored to your business needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.featured ? 'featured' : ''}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

