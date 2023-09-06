import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import PublicDisclosure from './pages/PublicDisclosure/PublicDisclosure'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admission from './pages/Admission/Admission'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'


const App = () => {
  const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = "visible"
    }, [pathname]);
  }
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/publicdisclosure" element={<PublicDisclosure/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App