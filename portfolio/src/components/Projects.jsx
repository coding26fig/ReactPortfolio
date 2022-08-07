import React from 'react'
import Project1 from '../assets/gitcocktail.png';
import Project2 from '../assets/Passwordgenerator.png';
import Project3 from '../assets/Stockalert.png';
import Project4 from '../assets/WDscheduler.png';
import Project5 from '../assets/comingsoon.jpg';
import Project6 from '../assets/comingsoon.jpg';


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
    <div className=' pb-8 '>
    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
    <p className='py-6'>Please Check out some of my recent projects</p>
</div>
{/*Container*/}
<div 
className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {/*Grid*/}
    <div style={{backgroundImage: `url(${Project1}`}} 
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>
       
       {/* HOVER EFFECTS*/}
        <div className='opacity-8 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                
            </span>
            <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>

                <a href="https://github.com/coding26fig/project1_Cocktail-Recipe/tree/main"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
            </div>
            </div>  
    
    </div>
     <div style={{backgroundImage: `url(${Project2}`}} 
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>
       
       {/* HOVER EFFECTS*/}
        <div className='opacity-8 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                
            </span>
            <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>

                <a href="https://github.com/coding26fig/password_generator"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
            </div>
            </div>  
    
    </div>
     <div style={{backgroundImage: `url(${Project3}`}} 
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>
       
       {/* HOVER EFFECTS*/}
        <div className='opacity-8 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                
            </span>
            <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>

                <a href="https://github.com/coding26fig/15-Project2-Stock-Alert-Tracker"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
            </div>
            </div>  
    
    </div>
     <div style={{backgroundImage: `url(${Project4}`}} 
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>
       
       {/* HOVER EFFECTS*/}
        <div className='opacity-8 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                
            </span>
            <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>

                <a href="https://github.com/coding26fig/WorkDayScheduler"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
            </div>
            </div>  
    
    </div>
    <div style={{backgroundImage: `url(${Project5}`}} 
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>
       
       {/* HOVER EFFECTS*/}
        <div className='opacity-8 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                
            </span>
            <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>

                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
            </div>
            </div>  
    
    </div>
    <div style={{backgroundImage: `url(${Project6}`}} 
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>
       
       {/* HOVER EFFECTS*/}
        <div className='opacity-8 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                
            </span>
            <div className='pt-8 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>

                <a href="/"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
            </div>
            </div>  
    
    </div>
</div>
</div>
    </div>
  )
}

export default Projects