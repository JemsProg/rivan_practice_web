import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DC Academy
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/courses" className="hover:text-blue-500">Courses</Link>
          <Link to="/quotation" className="hover:text-blue-500">Quotation</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
