import React from 'react'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import SchoolDesign from './components/SchoolDesign'
import LandscapeDesign from './components/LandscapeDesign'
import Rules from './pages/Rules'
import ContactUs from './pages/ContactUs'
import Registration from './components/Registration'


const App = () => {
  return (
   <BrowserRouter>
   <Header />
      <Routes > 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/categories/schooldesign' element={<SchoolDesign />} />
        <Route path='/categories/landscapedesign' element={<LandscapeDesign />} />  
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/rules' element={<Rules />} />  
        <Route path='/register' element={<Registration />} />  
        <Route path='/footer' element={<Footer />} />
      </Routes>
   <Footer />
    </BrowserRouter>
  )
  
}

export default App;