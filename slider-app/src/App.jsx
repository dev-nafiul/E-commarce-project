// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Home from './Component/Home/Home.jsx'
import Navbar from './Component/Navbar/Navbar';
import './App.css'
import Slider from './Component/Slider/Slider.jsx';
import Vitual from './Component/Vitual component/Vitual.jsx';
import Products_sec from './Component/Products/Products_sec.jsx';
import Testimonials from './Component/Testimolials/Testimonials.jsx';
import Footer from './Component/Footer/Footer.jsx';
function App() {
  
  return (
    <>
    <Navbar/>
    <Home />
    <Slider />
    <Vitual />
    <Products_sec />
    <Testimonials />
    <hr />
    <Footer />
    
    </>
  )
}

export default App
