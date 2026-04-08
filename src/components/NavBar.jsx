import React, {useState} from 'react'
import Logo from './Logo'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='fixed top-3 left-1/2 -translate-x-1/2 backdrop-blur-xl shadow-[0px_4px_20px_rgb(var(--accent-shadow),0.4)] flex justify-between items-center w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw] my-7 px-4 py-3  rounded-lg z-50'>
        <div className='w-10 h-10'>
            <Logo name={"Aminul Islam"}/>
        </div>

        <nav className='hidden md:flex items-center gap-6 text-gray-400'>
            <a className="relative text-sm py-1 text-gray-400 hover:text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100" href="#home">Home</a>

            <a className="relative text-sm py-1 text-gray-400 hover:text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100" href="#about">About</a>

            <a className="relative text-sm py-1 text-gray-400 hover:text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100" href="">Projects</a>

            <a className="relative text-sm py-1 text-gray-400 hover:text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100" href="">Skills</a>
            
            <a className="relative text-sm py-1 text-gray-400 hover:text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100" href="">Contact</a>
        </nav>

        {/* Desktop Buttons */}
        <div className='hidden md:flex items-center gap-3'>
          <button onClick={()=>{document.documentElement.classList.toggle("dark");}} className='shadow-[0px_4px_20px_rgb(var(--accent-shadow),0.2)] hover:shadow-[0px_4px_20px_rgb(var(--accent-shadow),0.6)] text-accent hover:transition-all duration-500 rounded-full p-1 px-2 cursor-pointer'>☀</button>
          <button className='border border-accent hover:bg-accent text-accent hover:text-bg hover:transition-all duration-500 px-4 py-1 rounded-2xl'>Resume</button>
        </div>


        {/* Hamburger */}
        <button 
          className='md:hidden text-2xl z-50 text-accent'
          onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? '✕' : '☰'}
        </button>


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
      
    </header>
  )
}

export default NavBar