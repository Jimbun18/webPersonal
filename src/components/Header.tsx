import React from 'react'
import { User } from 'lucide-react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <User className="mr-2" />
          <h1 className="text-2xl font-bold">Jimbun</h1>
        </motion.div>
        <nav>
          <ul className="flex space-x-4">
            {['Profile', 'Experience', 'Technologies', 'Projects', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-purple-200 transition-colors duration-200">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header