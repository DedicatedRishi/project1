import React from 'react'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
   <BrowserRouter>
   <Header />
      <Routes > 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
   <Footer />
    </BrowserRouter>
  )
  
}

export default App;