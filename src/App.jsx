import React from 'react'
import About from './pages/About'
import Services from './pages/Services'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
   <>
    <Header/>
    <Contact />
    <Services />
    <Footer />
    </>
  )
  
}

export default App;