import React from 'react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import PolarAreaChartDemo from '../components/Test';


function Experience() {
    return (
        <div name="Experience" className='h-screen w-full bg-white'>
            <div className='w-full h-full flex md:flex-row flex-col'>
                <div className='w-full h-full flex flex-col md:flex-row justify-evenly items-center'>
                    <h1 className='border-b-2 border-gray-500 w-fit text-3xl font-serif'>Skills</h1>
                    <div className='w-full grid grid-cols-3 gap-4 place-items-stretch h-56'>
                        <div className='w-32 '><img src="https://i.ibb.co/54pdt1c/695px-C-Programming-Language-svg.png" alt="C Language" /></div>
                        <div className='w-32 '><img src="https://i.ibb.co/Pt8dBhj/c-sharp-programming-language-icon.webp" alt="Csharp" /></div>
                        <div className='w-32 '><img src="https://i.ibb.co/mSvDJWW/React-icon-svg.png" alt="React" /></div>
                        <div className='w-32 '><img src="https://i.ibb.co/8dr5Wqf/nodejs-logo-FBE122-E377-seeklogo-com.png" alt="Nodejs" /></div>
                        <div className='w-32 '><img src="https://i.ibb.co/GJj4vn8/1-6ooq0-R60ba3-UT5c-QVem-A-removebg-preview.png" alt="TailwindCSS" /></div>
                    </div>
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <PolarAreaChartDemo />
                </div>
            </div>
        </div>
    )
}
export default Experience