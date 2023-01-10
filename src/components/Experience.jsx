import React from 'react'

function Experience() {
    return (
        <div name="Experience" className='h-fit w-full flex flex-col justify-center items-center'>
            <div className='h-2/3 max-w-screen-lg '>
                <h1 className='text-5xl underline p-5'>Experience</h1>
                <div className='grid grid-rows-3 grid-flow-col md:grid md:grid-rows-2 md:grid-flow-col'>
                    <img className=' w-full md:w-42 md:p-20 p-5 hover:animate-ping duration-500' src="https://cdn.cdnlogo.com/logos/c/27/c.svg" alt="CSharp" />
                    <img className=' w-full md:w-42 md:p-20 p-5 hover:animate-bounce duration-500' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="Javascript" />
                    <img className=' w-full md:w-42 md:p-20 p-5 hover:rotate-6 duration-500' src="https://nodejs.org/static/images/logo.svg" alt="Node" />
                    <img className=' w-full md:w-42 md:p-20 p-5 hover:animate-spin duration-100' src="https://www.obg.eu.com/img/technologies/react.png" alt="React" />
                    <img className=' w-full md:w-42 md:p-20 p-5 hover:rotate-6 duration-500' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="TailwindCSS" />
                    <img className=' w-full md:w-42 md:p-20 p-5 hover:animate-pulse duration-500' src="https://img.icons8.com/color/480/c-programming.png" alt="c" />
                </div>
            </div>
        </div>
    )
}
export default Experience