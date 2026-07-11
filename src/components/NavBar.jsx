import React, {useState} from 'react'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('home')

    const navHoverLinkStyle = "relative text-sm py-1 text-gray-400 hover:text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";

    const navActiveLinkStyle = "relative text-sm py-1 text-gray-400 text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-accent after:scale-x-100";

  return (
    <header className='fixed top-3 left-1/2 -translate-x-1/2 backdrop-blur-xl shadow-[0px_4px_20px_rgb(var(--accent-shadow),0.4)] flex justify-between items-center w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw] my-7 px-4 py-3  rounded-lg z-50'>
        <div className='w-10 h-10'>
            <Logo name={"Aminul Islam"}/>
        </div>

        {/* using navLink so that active link gets hilighted automatically. for this had to use a function inside the class prop */}
        <nav className='hidden md:flex items-center gap-6 text-gray-400'>
            <NavLink 
            to='/'
            end
            className={({isActive }) =>
            isActive?navActiveLinkStyle:navHoverLinkStyle
            }>Home</NavLink>

            <NavLink to='/about' className={({isActive }) =>
            isActive?navActiveLinkStyle:navHoverLinkStyle
            }>About</NavLink>

            <NavLink to='/projects' className={({isActive }) =>
            isActive?navActiveLinkStyle:navHoverLinkStyle
            }>Projects</NavLink>
            
            <NavLink to='/contact' className={({isActive }) =>
            isActive?navActiveLinkStyle:navHoverLinkStyle
            }>Contact</NavLink>
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
        className={`fixed top-0 left-0 w-full h-screen bg-bg/95 backdrop-blur-full text-white transform transition-transform duration-500 ease-in-out z-40 md:hidden
        ${isOpen ? 'translate-y-0' : '-translate-y-[105%]'}`}
        >
            <div className='flex flex-col items-center justify-center h-full gap-6 text-lg'>



            <NavLink 
            to='/'
            end
            className={({isActive }) =>
            isActive?navActiveLinkStyle:navHoverLinkStyle
            }
            onClick={()=>setIsOpen(!isOpen)}
            >Home</NavLink>

            <NavLink to='/about' className={({isActive }) =>
            isActive?navActiveLinkStyle:navHoverLinkStyle
            }
            onClick={()=>setIsOpen(!isOpen)}
            >About</NavLink>

            <NavLink to='/projects' className={({isActive }) =>
            isActive?navActiveLinkStyle:navHoverLinkStyle
            }
            onClick={()=>setIsOpen(!isOpen)}
            >Projects</NavLink>
            
            <NavLink to='/contact' className={({isActive }) =>
            isActive?navActiveLinkStyle:navHoverLinkStyle
            }
            onClick={()=>setIsOpen(!isOpen)}
            >Contact</NavLink>

                <button onClick={()=>{document.documentElement.classList.toggle("dark"); setIsOpen(!isOpen)}} className='shadow-[0px_4px_20px_rgb(var(--accent-shadow),0.2)] hover:shadow-[0px_4px_20px_rgb(var(--accent-shadow),0.6)] text-accent hover:transition-all duration-500 rounded-full p-1 px-2 cursor-pointer'>☀</button>

                <button className='border border-accent hover:bg-accent text-accent hover:text-bg hover:transition-all duration-500 px-4 py-1 rounded-2xl'>Resume</button>


            {/* <div className='flex gap-4 mt-4'>
                <button className='bg-blue-400 rounded-2xl px-3 py-1'>🌗</button>
                <button className='bg-blue-400 px-4 py-1 rounded-2xl'>Resume</button>
            </div> */}

            </div>
        </div>
      
    </header>
  )
}

export default NavBar