import React from 'react'
import 'primeicons/primeicons.css';


function Load(props) {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div>
        <i className="pi pi-spin pi-spinner" style={{'fontSize': `${props.size}rem`}}></i>
        </div>
    </div>
  )
}

export default Load