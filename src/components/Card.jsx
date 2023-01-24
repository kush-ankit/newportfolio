import React from 'react'

function Card(props) {

  return (
    <div className='m-auto h-[400px] w-[330px] bg-gradient-to-b from-[#242B2E] rounded-2xl p-3 shadow-md shadow-[#758283]'>
        <div className='h-[50%] w-full '>
            <div className='h-full w-full'>
                <img src={props.img} alt="p1" className='rounded-2xl' />
            </div>
            <div className='h-full w-full p-2 space-y-4'>
                <h1 className='text-3xl font-semibold '>{props.name}</h1>
                <p className='italic text-xl text-center'>{props.about}</p>
                <button className='w-full h-fit bg-gradient-to-r from-blue-500 to-cyan-500 py-2 rounded-2xl'>know more</button>
            </div>
        </div>
    </div>
  )
}

export default Card