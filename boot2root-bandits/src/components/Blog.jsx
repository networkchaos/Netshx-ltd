import React, { useState, useEffect, useRef } from 'react'

const Blog = () => {
  const sectionRef = useRef(null)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome to Boot2RootBandits',
      excerpt: 'Introducing our elite hacking team and our mission to push the boundaries of cybersecurity.',
      content: 'Boot2RootBandits is an elite cybersecurity team specializing in Capture The Flag competitions, penetration testing, and ethical hacking. We are passionate about cybersecurity and dedicated to sharing knowledge with the community.',
      author: '0x46._',
      date: '2024-11-26',
      category: 'Team',
      tags: ['Introduction', 'Team']
    },
    {
      id: 2,
      title: 'CTF Strategy: From Beginner to Champion',
      excerpt: 'Learn the strategies and techniques that helped us rank #94 globally in CTFROOM.',
      content: 'Competing in CTF competitions requires a combination of technical skills, strategic thinking, and teamwork. In this post, we share our approach to CTF challenges and how we prepare for competitions.',
      author: '0x46._',
      date: '2024-11-25',
      category: 'CTF',
      tags: ['CTF', 'Strategy', 'Tips']
    },
    {
      id: 3,
      title: 'Smart Contract Security: Common Vulnerabilities',
      excerpt: 'Exploring common vulnerabilities in smart contracts and how to identify them during audits.',
      content: 'Smart contract security is crucial in the blockchain ecosystem. We discuss common vulnerabilities like reentrancy attacks, integer overflow, and access control issues, along with best practices for secure development.',
      author: '0x46._',
      date: '2024-11-24',
      category: 'Security',
      tags: ['Smart Contracts', 'Security', 'Blockchain']
    }
  ])
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.blog-post')
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
        const items = sectionRef.current?.querySelectorAll('.blog-post')
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

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <section id="blog" className="blog" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">Insights, tutorials, and updates from the team</p>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-post">
              <div className="blog-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{formatDate(post.date)}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <div className="blog-author">
                  <span className="author-icon">👤</span>
                  <span>{post.author}</span>
                </div>
                <div className="blog-tags">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <button 
                className="blog-read-more"
                onClick={() => setSelectedPost(post)}
              >
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
      
      {selectedPost && (
        <div className="blog-modal" onClick={() => setSelectedPost(null)}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={() => setSelectedPost(null)}>×</button>
            <div className="blog-modal-header">
              <span className="blog-modal-category">{selectedPost.category}</span>
              <span className="blog-modal-date">{formatDate(selectedPost.date)}</span>
            </div>
            <h2 className="blog-modal-title">{selectedPost.title}</h2>
            <div className="blog-modal-author">By {selectedPost.author}</div>
            <div className="blog-modal-body">
              <p>{selectedPost.content}</p>
            </div>
            <div className="blog-modal-tags">
              {selectedPost.tags.map((tag, idx) => (
                <span key={idx} className="blog-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog

