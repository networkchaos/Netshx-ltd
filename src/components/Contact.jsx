import React, { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.contact-item, .social-link, .contact-form')
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
      // Fallback: make visible after 1 second if observer doesn't trigger
      setTimeout(() => {
        const items = sectionRef.current?.querySelectorAll('.contact-item, .social-link, .contact-form')
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitting: true, submitted: false, error: false })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '0d17436b-44fc-496b-8cd2-e85a4da129c9',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus({ submitting: false, submitted: true, error: false })
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          setFormStatus({ submitting: false, submitted: false, error: false })
        }, 5000)
      } else {
        setFormStatus({ submitting: false, submitted: false, error: true })
      }
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true })
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/networkchaos',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/george-kinyanjui-9a4059295/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'Farcaster',
      url: 'https://farcaster.xyz/0x46',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/FkJijo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6h-2a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-7a4 4 0 0 0-4-4z"></path>
          <path d="M6 6H4a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-7a4 4 0 0 0-4-4z"></path>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Get in touch with NETSHX LTD for your cybersecurity needs</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Company</h3>
              <p>NETSHX LTD</p>
            </div>
            <div className="contact-item">
              <h3>Contact Person</h3>
              <p>GEORGE KINYANJUI</p>
              <p className="contact-role">Founder & Lead Consultant</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p><a href="tel:+254113374824">+254 113 374 824</a></p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:gruchathi@gmail.com">gruchathi@gmail.com</a></p>
            </div>
            <a 
              href="https://drive.google.com/file/d/18OYk8N5z2VFnds_e2vKXZVK4K3BUsjx3/view?usp=drive_link" 
              className="cv-button download-cv" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Founder's CV
            </a>
            <div className="social-links">
              <h3>Connect With Us</h3>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.name}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What is this regarding?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>
            {formStatus.submitted && (
              <div className="form-message success">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {formStatus.error && (
              <div className="form-message error">
                ✗ Something went wrong. Please try again or contact us directly.
              </div>
            )}
            <button 
              type="submit" 
              className="submit-button"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

