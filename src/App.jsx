import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Cent from './components/Cent'
import TestLogo from './components/TestLogo'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'



function App() {


  return (
    <>
      {/* <Nav/> */}
      <NavBar/>

      <div className='mt-35 mb-15 max-w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw] mx-auto'>
        {/* <Hero/> */}
        <About/>
        {/* <Contact/> */}

        {/* <Skills/> */}

      </div>


    </>
  )
}

export default App
