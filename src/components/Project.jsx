import React from 'react'
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"


function Project() {
  return (
    <div name="Project" className='h-screen w-full flex flex-col justify-evenly items-center'>
      <div className='max-w-screen-lg h-screen flex flex-col justify-evenly items-left'>
      <h1 className='font-bold text-5xl underline pl-5'>Projects</h1>
      <div className='w-full flex flex-col md:flex-row justify-evenly items-center'>
        <div className='w-full md:w-1/3 px-5 pb-7' >
          <img src={proj1} alt="proj1" className='md:mb-5' />
          <h2 className='font-bold text-center text-2xl'>Quiz Portal</h2>
        </div>
        <div className='w-full md:w-1/3 px-5 pb-7'>
          <img src={proj2} alt="proj1" className='md:mb-5' />
          <h2 className='font-bold text-center text-2xl'>Mobile App</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Project