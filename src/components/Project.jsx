import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'



function Project() {
  return (
    <div className='w-full h-screen bg-[#ccc] p-5'>
      <div className='flex flex-col justify-center items-center md:gap-5 w-full h-full '>
        <div className='w-fit h-full flex justify-center items-center'>
          <h1 className='text-xl font-serif font-bold border-b-2 border-gray-500 pb-5'>Recent Projects</h1>
        </div>
        <div className='w-full h-full  hover:bg-[] flex flex-col-reverse md:flex-row'>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='md:shadow-lg w-fit h-fit text-center p-5 rounded-lg md:bg-white'>
              <div className='md:text-3xl text-xl font-serif'>Quiz Portal</div>
              <div className='italic'>"Lets test your knowledge"</div>
              <div className='md:text-2xl text-xl text-center flex justify-center'><BsFillArrowRightCircleFill /></div>
            </div>
          </div>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='flex justify-center items-center md:p-5'>
              <img src="https://i.ibb.co/M1Gvdw5/Screenshot-20221217-131511.png" alt="quizportal" className='md:w-[60%] border-8 border-white' />
            </div>
          </div>
        </div>
        <div className='w-full h-full  hover:bg-[] flex flex-col-reverse md:flex-row'>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='md:shadow-lg w-fit h-fit text-center p-5 rounded-lg md:bg-white '>
              <div className='text-3xl font-serif'>Portfolio website</div>
              <div className='italic'>"Do you want to know me"</div>
              <div className='text-2xl text-center flex justify-center'><BsFillArrowRightCircleFill /></div>
            </div>
          </div>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='flex justify-center items-center md:p-5'>
              <img src="https://i.ibb.co/2KLtFJm/Screenshot-20221230-234827.png" alt="quizportal" className='md:w-[60%] border-8 border-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project