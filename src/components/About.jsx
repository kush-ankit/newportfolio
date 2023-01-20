import React from 'react'
import { BiDetail } from 'react-icons/bi';


function About() {
    return (
        <div name="About" className='p-4 w-full md:h-screen h-screen flex flex-col justify-center items-center'>
            <div className='bg-[#2c3e50] w-full h-full rounded-lg p-5 '>
                <div className='shadow-lg shadow-orange-100 rounded-xl w-fit p-2'> <BiDetail size={40} /></div>
                <div className='max-w-screen-lg mx-auto flex flex-col'>
                    <p className='my-5'>
                        My name is Ankit Kushwaha, and I am a student of BTech CSE at the SRMCEM, Lucknow. I am passionate about computer science and technology, and I strive to stay up to date with the latest advancements. I am currently focusing my studies on software engineering, web development, and artificial intelligence.<br /><br />
                        I am a very ambitious person and I am always looking for ways to challenge myself and expand my knowledge. I am a team player and I enjoy working on projects with others to find creative solutions to problems. I believe that collaboration is key to success, and I enjoy working with other people to come up with innovative ideas.<br /><br />
                        I am passionate about giving back to the community and I am currently working on a project that will help youngsters.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About