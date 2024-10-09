import React from 'react'
import { FolderGit2 } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const Projects: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      name: 'E-commerce Platform',
      description: 'Developed a full-stack e-commerce platform with React, Node.js, and MongoDB, featuring user authentication, product management, and payment integration.',
      link: 'https://github.com/johndoe/ecommerce-platform'
    },
    {
      name: 'Task Management App',
      description: 'Created a responsive task management application using React and Firebase, implementing real-time updates and collaborative features.',
      link: 'https://github.com/johndoe/task-manager'
    }
  ]

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-purple-300">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 shadow-md rounded-lg p-6 transition-shadow duration-300 hover:shadow-xl border border-purple-500"
          >
            <div className="flex items-center mb-2">
              <FolderGit2 className="mr-2 text-purple-500" />
              <h3 className="text-xl font-semibold text-purple-300">{project.name}</h3>
            </div>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200"
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects