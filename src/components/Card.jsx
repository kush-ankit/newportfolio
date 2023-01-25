import React from 'react'

function Card(props) {
  return (
    <div id={`hello` + props.num} className='m-auto h-[350px] w-[330px] rounded-2xl p-3 shadow-md shadow-[#758283] transition ease-in-out delay-300'>
      <div onMouseEnter={(e) => { document.getElementById('hello' + props.num).style.backgroundColor = '#FF9A8B'; document.getElementById('hello' + props.num).style.backgroundImage = 'linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)'; document.getElementById('hello' + props.num).style.transitionDuration = '3s'; }} onMouseLeave={(e) => { document.getElementById('hello' + props.num).style.backgroundColor = 'white'; document.getElementById('hello' + props.num).style.backgroundImage = 'none' }} className='h-[50%] w-full duration-300 flex flex-col gap-5'>
        <div className='h-full w-full'>
          <img src={props.img} alt="p1" className='rounded-2xl' />
        </div>
        <div className='h-full w-full p-2 space-y-4'>
          <h1 className='text-3xl font-semibold '>{props.name}</h1>
          <p id={`load` + props.num} className='italic text-xl text-center duration-300'> </p>
          <button id={`button` + props.num} onClick={(e) => { document.getElementById('load' + props.num).innerHTML = props.about; document.getElementById('button' + props.num).style.display = 'none' }} className='w-full h-fit bg-gradient-to-r from-[#6D4C41] via-[#7c6159] to-[#6D4C41] py-2 rounded-2xl '>know more</button>
        </div>
      </div>
    </div>
  )
}

export default Card