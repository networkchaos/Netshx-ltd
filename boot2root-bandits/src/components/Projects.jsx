import React, { useEffect, useRef } from 'react'

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.project-item')
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = '1'
                item.style.transform = 'translateY(0)'
              }, index * 150)
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
        const items = sectionRef.current?.querySelectorAll('.project-item')
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

  const projects = [
    {
      title: 'Ethernaut Side Quests Exploits',
      description: 'Security auditing and exploit development for smart contracts. Demonstrates advanced penetration testing skills in blockchain security.',
      tech: 'TypeScript, Solidity',
      github: 'https://github.com/networkchaos/Ethernaut_Side_Quests_Exploits',
      category: 'Smart Contract Security'
    },
    {
      title: 'Network Programming in Python',
      description: 'Advanced network programming projects demonstrating expertise in network security, protocol implementation, and network architecture.',
      tech: 'Python, Network Security',
      github: 'https://github.com/networkchaos/CNE_330_Network_Programming_in_Python_I',
      category: 'Network Security'
    },
    {
      title: 'Security Incident Analysis',
      description: 'Real-world security incident analysis and documentation. Learning from security breaches and developing prevention strategies.',
      tech: 'Security Analysis',
      github: 'https://github.com/networkchaos/ON-TODAYS-EPISODE-I-GOT-HACKED-',
      category: 'Incident Response'
    },
    {
      title: 'Flash Loans on Celo',
      description: 'Implementation of flash loan functionality on the Celo blockchain, showcasing expertise in DeFi protocols and smart contract development.',
      tech: 'Solidity, Celo',
      github: 'https://github.com/networkchaos/flashLoansCelo',
      category: 'DeFi Security'
    },
    {
      title: 'CTF Challenge Solutions',
      description: 'Collection of solutions to complex cybersecurity puzzles and challenges from various CTF competitions, demonstrating problem-solving skills.',
      tech: 'Various',
      github: 'https://github.com/networkchaos',
      category: 'CTF Solutions'
    },
    {
      title: 'Cybersecurity Tools & Scripts',
      description: 'Custom scripts and frameworks developed for penetration testing, threat analysis, and vulnerability assessment.',
      tech: 'Python, Bash',
      github: 'https://github.com/networkchaos',
      category: 'Security Tools'
    }
  ]

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Cybersecurity Projects</h2>
        <p className="section-subtitle">Open-source projects and security research</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span className="project-tech">{project.tech}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

