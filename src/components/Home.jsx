import React from 'react'
// import photo from "../assets/myphoto.jpg";
import { AiOutlineHome } from 'react-icons/ai';

function Home() {
    return (
        <div name="Home" className='h-screen w-full p-5 overflow-hidden'>
            <div className='bg-[#2c3e50] h-full rounded-lg p-5'>
            <div className=' w-fit p-2 rounded-xl'>
                    <AiOutlineHome size={40} />
                </div>
                <div className='max-w-screen-lg mx-auto flex flex-col justify-evenly items-center h-full md:flex-row'>
                    <div className='w-full'>
                        <h2 className='text-4xl sm:text-7xl font-mono font-semibold'>Hola guys, <br />I am Ankit</h2>
                    </div>
                    <div className=''>
                        <img src='https://i.ibb.co/nc0gPwp/167212281343-removebg.png' alt="img" className=' rounded-md mx-auto opacity-80' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;