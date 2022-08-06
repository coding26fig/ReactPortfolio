import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

{/*container*/}

<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600'>Hi my name is</p>
    <h1 className='text-4xl sm:7xl font-bold text-[#ccd6f6]'>Charnay Birton </h1>
    
    <p>I am a full-stack developer specializing in designing, developing, and maintaining scalable software. 
        With a background in Project coordinating and user expirience. I am currently focused on curating web 
        applications that encompass both user and business-centric elements that encourage user retention and generates revenue and value.</p>

<div>
    <button> View Work <HiArrowNarrowRight/></button>
</div>

</div>
    </div>
    
    
  )
}

export default Home