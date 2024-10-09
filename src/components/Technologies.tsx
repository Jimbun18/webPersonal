import React from 'react'
import { Code } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const Technologies: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'RESTful APIs', 'GraphQL'
  ]

  return (
    <motion.section
      id="technologies"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-purple-300">Technologies</h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800 shadow-md rounded-lg p-6 transition-shadow duration-300 hover:shadow-xl border border-purple-500"
      >
        <div className="flex items-center mb-4">
          <Code className="mr-2 text-purple-500" />
          <h3 className="text-xl font-semibold text-purple-300">Skills & Tools</h3>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: '#6D28D9', color: 'white' }}
              className="bg-gray-700 text-gray-300 rounded-full px-4 py-2 text-center cursor-pointer transition-colors duration-200"
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  )
}

export default Technologies