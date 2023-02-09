import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

function About() {
    return (
        <div name="About" className='w-full h-[90vh] md:h-fit p-5'>
            <div className='h-full w-full flex flex-col justify-center gap-10 '>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-xl border-b-2 border-spacing-2 border-gray-100 pb-3'>A little bit about me</h1>
                </div>
                <div>
                    <p className='my-5 text-center text-xl font-serif ' style={{textShadow:"2px 2px 5px currentColor"}}>
                        I am a student of <span className='text-[#dc143cb5]'>BTech CSE</span>  at the <br /> <span className='text-[#dc143cb5]'> SRMCEM, Lucknow </span> in <span className='text-[#2E8B57]'> computer science and technology, </span>and I strive <br /> to stay up to date with the latest advancements. I am currently focusing my studies on <br /> <span className='text-[#695acdca]'> software engineering </span>,<span className='text-[#dc143cb5]'>web development</span>, and <span className='text-[#2E8B57]'>artificial intelligence</span>.<br />
                    </p>
                </div>
                <div  >
                    <a href="https://www.linkedin.com/in/ankit-kushwaha-135817227" > <div className=' flex flex-row justify-center items-center gap-2 font-bold text-xl underline hover:text-[#7fffd4]' > More about me <BsFillArrowRightCircleFill /></div></a>
                </div>
                <div className='flex justify-center'>
                    <a href='https://i.ibb.co/Gn29Sfh/resume.jpg' className='font-bold border-2 border-black bg-gradient-to-b from-black to-gray-900 text-white px-5 py-2' target="_blank" rel="noopener noreferrer">DOWNLOAD CV</a>
                </div>
            </div>

        </div>
    )
}

export default About


