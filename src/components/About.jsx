import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


function About() {
    return (
        <div name="About" className='w-full h-screen bg-[#ccc] p-5 '>
            <div className='h-full w-full flex flex-col justify-center gap-10 '>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-xl border-b-2 border-spacing-4 border-gray-500 pb-5'>A little bit about me</h1>
                </div>
                <div>
                    <p className='my-5 text-center text-xl font-serif'>
                        I am a student of BTech CSE at the SRMCEM, Lucknow from computer science and technology, and I strive to stay up to date with the latest advancements. I am currently focusing my studies on software engineering, web development, and artificial intelligence.<br /><br />
                    </p>
                </div>
                <div  >
                    <a href="https://www.linkedin.com/in/ankit-kushwaha-135817227" > <div className='flex flex-row justify-center items-center gap-3 font-bold text-xl' > More about me <BsFillArrowRightCircleFill /></div></a>
                </div>
                <div className='flex justify-center'>
                    <a href='/resume.pdf' className='font-bold border-2 border-black bg-gradient-to-b from-black to-gray-900 text-white px-5 py-2' target="_blank" rel="noopener noreferrer">DOWNLOAD CV</a>
                </div>
            </div>
        </div>
    )
}

export default About


