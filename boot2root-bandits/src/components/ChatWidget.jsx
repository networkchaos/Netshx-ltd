import React, { useState, useEffect, useRef } from 'react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'System',
      text: 'Welcome to Boot2RootBandits chat! Connect with the community.',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [username, setUsername] = useState('')
  const [isUsernameSet, setIsUsernameSet] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim() || !isUsernameSet) return

    const newMessage = {
      id: messages.length + 1,
      user: username,
      text: inputMessage,
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputMessage('')

    // Simulate responses (in real app, this would be via WebSocket)
    setTimeout(() => {
      const responses = [
        'Great point!',
        'Interesting perspective.',
        'Thanks for sharing!',
        'Let\'s discuss this further.',
        'Anyone else have thoughts on this?'
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      const botMessage = {
        id: messages.length + 2,
        user: 'Team Member',
        text: randomResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000 + Math.random() * 2000)
  }

  const handleSetUsername = (e) => {
    e.preventDefault()
    if (username.trim()) {
      setIsUsernameSet(true)
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      <button 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
        <span className="chat-badge">Live</span>
      </button>

      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <h3>Boot2RootBandits Chat</h3>
            <button 
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {!isUsernameSet ? (
            <div className="chat-username-setup">
              <form onSubmit={handleSetUsername}>
                <label>Enter your name to join the chat:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your name"
                  maxLength={20}
                  required
                />
                <button type="submit">Join Chat</button>
              </form>
            </div>
          ) : (
            <>
              <div className="chat-messages">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`chat-message ${message.user === username ? 'own' : ''}`}
                  >
                    <div className="message-header">
                      <span className="message-user">{message.user}</span>
                      <span className="message-time">{formatTime(message.timestamp)}</span>
                    </div>
                    <div className="message-text">{message.text}</div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form className="chat-input-form" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type a message..."
                  maxLength={500}
                />
                <button type="submit">Send</button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default ChatWidget

