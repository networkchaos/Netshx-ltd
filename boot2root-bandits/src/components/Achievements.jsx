import React, { useEffect, useRef } from 'react'

const Achievements = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.achievement-item')
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
        const items = sectionRef.current?.querySelectorAll('.achievement-item')
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

  const achievements = [
    {
      title: 'CTFROOM Global Ranking',
      position: '#94',
      description: 'Ranked 94th globally in CTFROOM, demonstrating consistent excellence in competitive cybersecurity challenges.',
      date: '2024',
      icon: '🏆'
    },
    {
      title: 'Daystar University CTF',
      position: '4th Place',
      description: 'Secured 4th place overall in a 24-hour CTF hacking competition. Gained hands-on experience in exploitation, reverse engineering, cryptography, and web vulnerabilities.',
      date: 'June 2024',
      icon: '🎯'
    },
    {
      title: 'BSides Nairobi 2024',
      position: '12th Place',
      description: 'Ranked 12th out of 53 teams in the BSides Nairobi Cyber Challenge CTF. Enhanced skills in penetration testing, network analysis, and forensic investigations.',
      date: 'October 2024',
      icon: '🔥'
    },
    {
      title: 'Bug Bounty Hunter',
      platform: 'HackerOne',
      description: 'Active bug bounty hunter since August 2021. Specialized in bug hunting, bug reporting, and application security analysis.',
      date: 'Aug 2021 - Present',
      icon: '🐛'
    },
    {
      title: 'Cyber Shujaa Security Analyst',
      certification: 'Cohort 3 - 2024',
      description: 'Completed comprehensive cybersecurity training program covering threat analysis, vulnerability management, incident response, penetration testing, and malware analysis.',
      date: 'Sep - Dec 2024',
      icon: '🎓'
    },
    {
      title: 'CCNA Certification',
      certification: 'CCNA 1, 2 & 3',
      description: 'Certified in networking concepts including LAN/WAN design, routing protocols (OSPF, EIGRP), VLANs, network security, and IP addressing.',
      date: '2021 - Present',
      icon: '📡'
    }
  ]

  return (
    <section id="achievements" className="achievements" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Achievements & Competitions</h2>
        <p className="section-subtitle">Our track record in CTF competitions and cybersecurity</p>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                {achievement.position && (
                  <div className="achievement-position">{achievement.position}</div>
                )}
                {achievement.certification && (
                  <div className="achievement-cert">{achievement.certification}</div>
                )}
                {achievement.platform && (
                  <div className="achievement-platform">{achievement.platform}</div>
                )}
                <p>{achievement.description}</p>
                <div className="achievement-date">{achievement.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

