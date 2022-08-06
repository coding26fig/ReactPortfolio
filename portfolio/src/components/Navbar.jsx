import React from 'react'
import {FaBars,FaTimes,} from 'react-icons/fa';
import Logo from '../assets/logo.png'
import { useState } from 'react';
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" style={{ width: '50px' }}/>
      </div>

       {/*menu*/}
      
          <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact Me</li>
        </ul>
        

        {/*Hamburger menu*/}
       <div onClick={handleClick} className='md:hidden z-10'>
         {!nav ? <FaBars /> : <FaTimes />}
          </div>


        {/*Mobile menu*/}
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
          <li className='py-6 text-4xl'>About</li> 
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Resume</li>
          <li className='py-6 text-4xl'>Contact Me</li>
        </ul>



        {/*Social icons*/}
        <div className='flex fixed flex-col top [35%] left-0'></div>
        <ul>
          <li> 
            <a href='www.linkedin.com/in/charnay-birton'>LinkedIn</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar