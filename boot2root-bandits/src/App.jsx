import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specialties from './components/Specialties'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Specialties />
      <Achievements />
      <Projects />
      <Blog />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App

