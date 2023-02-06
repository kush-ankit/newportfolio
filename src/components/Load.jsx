import React from 'react'
import 'primeicons/primeicons.css';


function Load(props) {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
        <div>
        <i className="pi pi-spin pi-spinner text-black" style={{'fontSize': `${props.size}rem`, }}></i>
        </div>
    </div>
  )
}

export default Load