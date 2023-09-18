import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import SchoolDesign from './components/SchoolDesign';
import LandscapeDesign from './components/LandscapeDesign';
const App = () => {
  return (
   <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/schooldesign'element={<SchoolDesign/>}/>
    <Route path='/landscapedesign' element={<LandscapeDesign/>}/>
    </Routes>
    <Footer/>
  </>
  )
  
}
export default App;