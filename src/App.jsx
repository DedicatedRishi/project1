import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import SchoolDesign from './components/SchoolDesign';
import LandscapeDesign from './components/LandscapeDesign';
import Login from './components/Login';
import Registration from './components/Registration';
import UploadPdf from './components/UploadPdf';
import Dashboard from './components/Dashboard';



const App = () => {
  return (
    <>
      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schooldesign' element={<SchoolDesign />} />
        <Route path='/landscapedesign' element={<LandscapeDesign />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/upload' element={<UploadPdf/>}/>
        </Routes>
      <Footer/>
    </>

  )
}


export default App;