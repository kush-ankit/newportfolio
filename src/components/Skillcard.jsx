import React from 'react'
import './SkillCard.css'

function Skillcard(props) {


  return (
    <div className='h-fit w-full flex flex-col justify-center items-center gap-4'>
      <img src={props.img} alt="p1" className='rounded-2xl m-auto h-64 shadow-lg shadow-white' />
      <div>
        <h1 className='text-3xl font-semibold w-[300px] md:w-[33rem]'>{props.name}</h1>
        <p className='md:w-[33rem] w-[300px] italic text-[#C0C0C0]'>"{props.describe}"</p>
      </div>
    </div>
  )
}

export default Skillcard