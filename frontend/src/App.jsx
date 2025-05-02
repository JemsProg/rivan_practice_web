import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import LandingPage from '../src/pages/LandingPage'
import Courses from '../src/pages/Courses'
import Quotation from '../src/pages/Quotation'
import Reviewers from './pages/Reviewers'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="/reviewer" element={<Reviewers />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
