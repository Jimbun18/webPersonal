import React from 'react'
import { Briefcase } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const Experience: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      position: 'Senior Web Developer',
      period: '2020 - Present',
      description: 'Lead developer for multiple high-profile projects, mentoring junior developers, and implementing best practices.'
    },
    {
      company: 'Digital Solutions LLC',
      position: 'Web Developer',
      period: '2018 - 2020',
      description: 'Developed and maintained various client websites, focusing on performance optimization and responsive design.'
    }
  ]

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-purple-300">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 shadow-md rounded-lg p-6 transition-shadow duration-300 hover:shadow-xl border border-purple-500"
          >
            <div className="flex items-center mb-2">
              <Briefcase className="mr-2 text-purple-500" />
              <h3 className="text-xl font-semibold text-purple-300">{exp.position}</h3>
            </div>
            <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience