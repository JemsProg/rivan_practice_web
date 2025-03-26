import React from 'react'
import { motion } from "motion/react"

const Courses = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-center mb-8 text-blue-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Courses
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Course 1', 'Course 2', 'Course 3'].map((course, idx) => (
            <motion.div
              key={course}
              className="bg-white p-6 rounded shadow"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{course}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque euismod.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
