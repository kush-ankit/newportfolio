import React from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri';

// import photo from "../assets/myphoto.jpg";
// import { AiOutlineHome } from 'react-icons/ai';

function Home() {
    return (
        <div name="Home" className='h-screen w-full p-4 overflow-hidden'>
            <div className='h-full rounded-lg p-5'>
                <div className='hover:bg-blue-500 w-fit p-2 rounded-lg' onClick='history.back()'>
                    <RiArrowLeftSLine size={30} />
                </div>
                <div className='max-w-screen-lg mx-auto flex flex-col  items-center h-full md:flex-row'>
                    <div className='w-full my-10  p-5 text-orange-200'>
                        <h2 className='text-4xl sm:text-7xl font-mono font-semibold'>Hola guys, <br />I am Ankit</h2>
                    </div>
                    <div className=' h-fit flex flex-col justify-center'>
                        <img src='https://i.ibb.co/nc0gPwp/167212281343-removebg.png' alt="img" className=' rounded-md mx-auto shadow-lg shadow-orange-200  ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;