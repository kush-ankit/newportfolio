import React from 'react'

function Card(props) {




  return (
    <div id={`hello` + props.num} className='m-auto h-[350px] w-[330px] rounded-2xl p-3 shadow-md shadow-[#758283] transition ease-in-out delay-300'>
      <div>
        <div className='h-full w-full'>
          <img src={props.img} alt="p1" className='rounded-2xl' />
        </div>
        <div className='h-full w-full p-2 space-y-4'>
          <h1 className='text-3xl font-semibold text-center text-rose-500' >{props.name}</h1>
        <p className='italic text-xl text-center duration-300'>"{props.about}"</p>
      </div>
    </div>
    </div >
  )
}

export default Card