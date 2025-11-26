import React, { useEffect, useRef } from 'react'

const Portfolio = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.portfolio-item')
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
      // Fallback: make visible after 1 second if observer doesn't trigger
      setTimeout(() => {
        const items = sectionRef.current?.querySelectorAll('.portfolio-item')
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

  const portfolioItems = [
    {
      id: 1,
      title: 'VerifyAI',
      description: 'Smart, secure, and efficient digital voter registration using Artificial Intelligence with OCR and facial recognition technology.',
      tech: 'JavaScript',
      github: 'https://github.com/networkchaos/VerifyAI-',
      category: 'AI & Security'
    },
    {
      id: 2,
      title: 'miniOdds',
      description: 'A revolutionary Web3-powered prediction and micro-betting platform designed for Kenya and emerging markets, combining betting excitement with blockchain transparency and security.',
      tech: 'TypeScript, Web3',
      github: 'https://github.com/networkchaos/miniOdds',
      category: 'Web3 & Blockchain'
    },
    {
      id: 3,
      title: 'FundHang',
      description: 'Fast, secure, and verifiable conditional payments system with temporary suspension functionality until all agreed conditions are met.',
      tech: 'TypeScript, Smart Contracts',
      github: 'https://github.com/networkchaos/FundHang',
      category: 'DeFi & Payments'
    },
    {
      id: 4,
      title: 'miniCard',
      description: 'Blockchain-powered automated payment and subscription management platform enabling secure card linking, recurring payment delegation, and transaction tracking.',
      tech: 'TypeScript, Blockchain',
      github: 'https://github.com/networkchaos/miniCard',
      category: 'FinTech & Blockchain'
    },
    {
      id: 5,
      title: 'Ethernaut Exploits',
      description: 'Security auditing and exploit development for smart contracts. Demonstrates advanced penetration testing skills in blockchain security.',
      tech: 'TypeScript, Solidity',
      github: 'https://github.com/networkchaos/Ethernaut_Side_Quests_Exploits',
      category: 'Security & Auditing'
    },
    {
      id: 6,
      title: 'Flash Loans on Celo',
      description: 'Implementation of flash loan functionality on the Celo blockchain, showcasing expertise in DeFi protocols and smart contract development.',
      tech: 'Solidity, Celo',
      github: 'https://github.com/networkchaos/flashLoansCelo',
      category: 'DeFi Development'
    }
  ]

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">Showcasing George Kinyanjui (0x46._)'s Notable Projects & Case Studies</p>
        <div className="portfolio-intro">
          <p>
            Our founder's portfolio represents a diverse range of successful security audits, 
            penetration testing engagements, Web3 development, and innovative blockchain solutions. 
            Each project demonstrates expertise in cybersecurity, smart contract development, and cutting-edge technology.
          </p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-content">
                <div className="portfolio-header">
                  <span className="portfolio-category">{item.category}</span>
                  <span className="portfolio-tech">{item.tech}</span>
                </div>
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                <a 
                  href={item.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

