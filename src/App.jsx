import React from 'react'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Rules from './pages/Rules'
import Contact from './pages/Contact'


const App = () => {
  return (
   <BrowserRouter>
   <Header />
      <Routes > 
        
        <Route path='/footer' element={<Footer />} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  )
  
}

export default App;