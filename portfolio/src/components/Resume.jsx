import React from 'react'
import Resumebg from '../assets/Screenshot 2022-08-08 082534.png'

const Resume = () => {
  return (
 <div name='resume' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
    <div className=' pb-8 '>
    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Resume</p>
    <p className='py-6'>Please take a look at my resume </p>
</div>
{/*Container*/}
<div 
className='w-full h-full bg-no-repeat bg-cover bg-left'>
    {/*Grid*/}
    <div style={{backgroundImage: `url(${Resumebg}`}} 
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>
       
       {/* HOVER EFFECTS*/}
        <div className='opacity-8 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                 <a href="https://sway.office.com/ThvcjZmbzF9e4tWP?ref=Link?play"> <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button></a>
            </span>
            <div className='pt-8 text-center'>
                

               
            </div>
            </div>  
    
    </div>
            </div>  
</div>


 </div>
  )
}

export default Resume