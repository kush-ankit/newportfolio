import React from 'react'
import './Load.css';


function Load(props) {
  return (
    <div className='w-full h-[98vh] flex justify-center items-center'>
      <div class="loader">
        <div class="face">
        </div>
        <div class="face">
        </div>
      </div>
    </div>
  )
}

export default Load