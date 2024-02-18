import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Connect from './components/Connect'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Food from './components/Food'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
        <Navbar />
        <About />
        <Connect />
        <Services />
        <Reviews />
        <Food />
        <Footer />
    </div>
  )
}

export default App