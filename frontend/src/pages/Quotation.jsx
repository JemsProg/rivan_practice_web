import React, { useState } from 'react'
import { motion } from "motion/react"

const Quotation = () => {
  const [formData, setFormData] = useState({ name: '', course: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send to Django backend or do something with form data
    console.log('Form data:', formData)
    alert('Quotation requested!')
    setFormData({ name: '', course: '', message: '' })
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-center mb-8 text-blue-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Request a Quotation
        </motion.h2>

        <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded shadow">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Course of Interest</label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Quotation
