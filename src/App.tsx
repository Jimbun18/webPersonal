import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <Profile />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  )
}

export default App