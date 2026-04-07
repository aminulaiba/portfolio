import React, { useState } from 'react'
import Logo from './Logo'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <div className='text-white flex justify-between items-center px-6 h-16 bg-(--bg-nav) relative z-50'>
        
        {/* Logo */}
        <div className='w-12 h-12'>
          <Logo name='Aminul Islam' theme='green' />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-6 text-gray-400'>
          <li><a href="#">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Contact</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className='hidden md:flex items-center gap-3'>
          <button className='border border-accent hover:bg-accent text-accent hover:text-bg hover:transition-all duration-500 rounded-2xl px-3 py-1'>🌗</button>
          <button className='border border-accent hover:bg-accent text-accent hover:text-bg hover:transition-all duration-500 px-4 py-1 rounded-2xl'>Resume</button>
        </div>

        {/* Hamburger */}
        <button 
          className='md:hidden text-2xl z-50'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Overlay Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/10 backdrop-blur-md text-white transform transition-transform duration-500 ease-in-out z-40 md:hidden
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className='flex flex-col items-center justify-center h-full gap-6 text-lg'>

          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#" onClick={() => setIsOpen(false)}>Contact</a>

          <div className='flex gap-4 mt-4'>
            <button className='bg-blue-400 rounded-2xl px-3 py-1'>🌗</button>
            <button className='bg-blue-400 px-4 py-1 rounded-2xl'>Resume</button>
          </div>

        </div>
      </div>

    </>
  )
}

export default Nav