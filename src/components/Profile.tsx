import React from 'react'
import { motion, useInView } from 'framer-motion'

const Profile: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.section
      id="profile"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-purple-300">Profile</h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800 shadow-lg rounded-lg p-6 transition-shadow duration-300 hover:shadow-xl border border-purple-500"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Jimbun"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-center text-gray-300"
        >
          Passionate web developer with 5 years of experience in creating responsive and user-friendly applications.
          Skilled in modern web technologies and committed to delivering high-quality solutions.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

export default Profile