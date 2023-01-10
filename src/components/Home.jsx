import React from 'react'
import photo from "../assets/myphoto.jpg";

function Home() {
    return (
        <div name="Home" className='h-fit w-full'>
            <div className='h-28'></div>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full md:px-0 px-4 md:flex-row'>
                <div className='w-full'>
                    <h2 className='text-4xl sm:text-7xl font-poppins font-bold '>Hello guys,<br />My name is Ankit Kushwaha</h2>
                    <p className='py-4 max-w-md'>
                        I am a CS student at SRMCEM college and persuing the degree of B.Tech.<br />
                        A very hard working student with full of smartness and <br/> confidence and ready to explore new challenges every day 
                    </p>
                        
                </div>
                <div className=''>
                    <img src={photo} alt="img" className='w-72 rounded-md mx-auto ' />
                </div>
            </div>
        </div>
    )
}

export default Home;