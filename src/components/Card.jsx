import React from 'react'

function Card(props) {




  return (
    <div id={`hello` + props.num} className='m-auto h-[350px] w-[330px] rounded-2xl p-3 shadow-md shadow-[#758283] transition ease-in-out delay-300'>
      <div>
        <div className='h-full w-full'>
          <img src={props.img} alt="p1" className='rounded-2xl' />
        </div>
        <div className='h-full w-full py-4 px-3 space-y-5'>
          <h1 className='text-3xl font-semibold text-center text-[#7fffd4]' style={{ textShadow: "2px 2px 10px currentColor" }} >{props.name}</h1>
          <p className='italic text-md text-center text-[#F5F5F5] '>"{props.about}"</p>
        </div>
      </div>
    </div >
  )
}

export default Card