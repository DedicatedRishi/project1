import React from 'react'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
   <BrowserRouter>
   <Header />
      <Routes > 
        
        <Route path='/footer' element={<Footer />} />
      </Routes>
   <Footer />
    </BrowserRouter>
  )
  
}

export default App;