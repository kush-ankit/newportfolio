import React from 'react'

function Contact() {
  return (
    <div name="Contact" className='w-full h-fit'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black md:border-white'>Contact</p>
                <p className='pt-5'>Submit the form below to get in touch with me</p>
            </div>

            <div>
                <form action="https://getform.io/f/cf06f0ea-5296-4e01-b7df-d1a47ea6edd4" method='POST' className='flex flex-col w-full md:w-1/2 '>
                <input type="text" name='Name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md md:text-white focus:outline-none md:placeholder-white placeholder-black'/>
                <input type="email" name='Email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md md:text-white focus:outline-none md:placeholder-white placeholder-black'/>
                <textarea name="Massage" id="" cols="30" rows="10" placeholder='Description here ...' className='p-2 bg-transparent border-2 rounded-md md:text-white focus:outline-none md:placeholder-white placeholder-black'></textarea>
                <button className='md:text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact