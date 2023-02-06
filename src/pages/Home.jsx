import React from 'react'
import 'primeicons/primeicons.css';


function Home() {
   
    return (
        <div name="Home" className='h-full w-full p-4 overflow-hidden'>
            <div className='h-full rounded-lg p-5'>
                <div className='w-fit px-2 rounded-lg md:hidden flex gap-10' >
                    <div><a href='https://www.github.com/kush-ankit' className='pi pi-github text-4xl py-1'> </a></div>
                    <div><a href='https://www.linkedin.com/in/ankit-kushwaha-135817227' className='pi pi-linkedin text-4xl p-1 text-blue-700'> </a></div>
                    <div><a href='https://instagram.com/kush_ankit_?igshid=ZDdkNTZiNTM=' className='pi pi-instagram text-3xl text-white rounded-lg p-1' style={{background:"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}}> </a></div>
                </div>
                <div className='max-w-screen-lg mx-auto flex flex-col  items-center h-full md:flex-row'>
                    <div id='load' className='w-full my-10 delay-500'>
                        <h2 className='text-xl sm:text-2xl font-mono font-semibold'>Hola guys, I am<div className='text-4xl sm:text-7xl text-[#CD5C5C]'>Ankit <br /> Kushwaha</div> <div className='italic'>"Only you can understand your self"</div> </h2>
                    </div>
                    <div className=' h-fit flex flex-col justify-center'>
                        <img src='https://i.ibb.co/Hpzgz1z/myimg.jpg' alt="img" className=' mx-auto ' style={{borderRadius: "60% 30%/10% 20%"}} />
                    </div>
                </div>
            </div>
        </div>
    )                           
}

export default Home;