import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
   <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
  </>
  )
  
}
export default App;