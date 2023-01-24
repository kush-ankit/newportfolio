import React from 'react'

function Skillcard(props) {

  return (
    <div className='m-auto h-[50%] w-[40%] bg-gradient-to-b from-[#242B2E] rounded-2xl p-3 shadow-md shadow-[#758283]'>
        <div className=' w-full '>
            <div className='h-full w-full'>
                <img src={props.img} alt="p1" className='rounded-2xl m-auto' />
            </div>
            <div className='h-fit w-full mx-auto'>
                <h1 className='text-3xl font-semibold '>{props.name}</h1>
            </div>
        </div>
    </div>
  )
}

export default Skillcard