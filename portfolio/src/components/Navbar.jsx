import React from 'react'
import {FaBars,FaTimes,} from 'react-icons/fa';
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" style={{ width: '50px' }}/>
      </div>

       {/*menu*/}
      <div> 
          <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact Me</li>
        </ul>
        </div>

        {/*Hamburger menu*/}
        <div className='hidden'>
          <FaBars/>
          </div>


        {/*Mobile menu*/}
        <ul className='hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact Me</li>
        </ul>


        
        {/*Social icons*/}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar