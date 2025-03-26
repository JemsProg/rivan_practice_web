import React from 'react'
import { motion } from "motion/react"

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-16 flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 text-blue-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nurturing Youth Skills and Growth <br className="hidden md:block" />
          for Tomorrow's Leaders
        </motion.h1>

        <motion.p
          className="max-w-2xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering students with the knowledge and resources to excel in technology careers.
        </motion.p>

        {/* Hero Image or Graphic */}
        <motion.img
          src="https://via.placeholder.com/400x200?text=Hero+Image"
          alt="Hero Visual"
          className="max-w-md w-full mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </section>

      {/* Icons Row (e.g., DC Mist, DC Culture, DC Admin, DC Future) */}
      <section className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {['DC Mist', 'DC Culture', 'DC Admin', 'DC Future'].map((item, i) => (
          <motion.div
            key={item}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="bg-blue-200 w-16 h-16 rounded-full mb-2" />
            <p className="font-semibold">{item}</p>
          </motion.div>
        ))}
      </section>

      {/* Looking to Become a Tech Professional? */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-center mb-6 text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Looking to Become a Tech Professional?
          </motion.h2>
          <motion.div
            className="flex flex-col md:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://via.placeholder.com/400x250?text=Classroom+Photo"
              alt="Classroom"
              className="w-full md:w-1/2 rounded shadow"
            />
            <div className="w-full md:w-1/2 text-gray-600">
              <p>
                Our academy offers hands-on training, expert mentorship, and real-world projects to 
                help you excel in the ever-evolving tech industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <motion.h3
            className="text-xl md:text-3xl font-bold text-center mb-6 text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What services we offer
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Mentorship', 'Hands-on Projects', 'Career Guidance'].map((service, i) => (
              <motion.div
                key={service}
                className="bg-white p-6 rounded shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="bg-blue-200 w-16 h-16 rounded-full mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-blue-700">{service}</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses We Have */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <motion.h3
            className="text-xl md:text-3xl font-bold text-center mb-6 text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What courses we have
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['PCNSA', 'Web Dev', 'Data Science'].map((course, i) => (
              <motion.div
                key={course}
                className="bg-gray-50 p-6 rounded shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-2 text-blue-700">{course}</h4>
                <p className="text-gray-600">
                  In-depth coverage of {course} fundamentals and advanced techniques.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Logo Showcase */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <motion.h3
            className="text-xl md:text-3xl font-bold text-center mb-6 text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Who joins us on this tech-driven journey?
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'https://via.placeholder.com/100x50?text=Company+1',
              'https://via.placeholder.com/100x50?text=Company+2',
              'https://via.placeholder.com/100x50?text=Company+3',
              'https://via.placeholder.com/100x50?text=Company+4',
              'https://via.placeholder.com/100x50?text=Company+5',
            ].map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                alt={`Partner ${i}`}
                className="h-10 object-contain"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <motion.h3
            className="text-xl md:text-3xl font-bold text-center mb-6 text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What our students say
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Student A', 'Student B', 'Student C'].map((student, i) => (
              <motion.div
                key={student}
                className="bg-gray-50 p-6 rounded shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="italic text-gray-600 mb-2">
                  “I had an amazing experience. The mentors were extremely supportive.”
                </p>
                <p className="font-semibold text-blue-700">{student}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <motion.h3
            className="text-xl md:text-3xl font-bold text-center mb-6 text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in touch with us
          </motion.h3>
          <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
            <form>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Message</label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="4"
                  placeholder="Your Message"
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
    </div>
  )
}

export default LandingPage
