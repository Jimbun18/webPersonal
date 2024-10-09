import React from 'react'
import { Mail, Phone } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const Contact: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-purple-300">Contact</h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800 shadow-md rounded-lg p-6 transition-shadow duration-300 hover:shadow-xl border border-purple-500"
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center mb-4"
        >
          <Mail className="mr-2 text-purple-500" />
          <p className="text-gray-300">Email: jimbun@example.com</p>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center"
        >
          <Phone className="mr-2 text-purple-500" />
          <p className="text-gray-300">Phone: (123) 456-7890</p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Contact