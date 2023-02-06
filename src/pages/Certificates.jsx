import React from 'react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Skillcard from '../components/Skillcard'


function Certificate() {

    const Data = [
        {
            id: '1',
            photo: 'https://i.ibb.co/54pdt1c/695px-C-Programming-Language-svg.png',
            naam: 'C Language'
        },
        {
            id: '2',
            photo: 'https://i.ibb.co/Pt8dBhj/c-sharp-programming-language-icon.webp',
            naam: 'Csharp'
        },
        {
            id: '3',
            photo: 'https://i.ibb.co/mSvDJWW/React-icon-svg.png',
            naam: 'React'
        },
        {
            id: '4',
            photo: 'https://i.ibb.co/8dr5Wqf/nodejs-logo-FBE122-E377-seeklogo-com.png',
            naam: 'Node js'
        },
        {
            id: '5',
            photo: 'https://i.ibb.co/GJj4vn8/1-6ooq0-R60ba3-UT5c-QVem-A-removebg-preview.png',
            naam: 'TailwindCSS'
        },
    ]
    return (
        <div name='Skills' className='w-full h-full'>
            <div className='w-full h-full flex flex-col md:flex-row gap-5'>
                <div className='w-full md:h-full h-fit text-3xl flex flex-col justify-evenly items-center font-semibold '>
                    <h1 className='w-fit border-b-2 border-slate-500 pt-5 p-3 '>Skills</h1>
                </div>
                <div className='w-full h-full'>
                    <div className='flex flex-wrap gap-10'>
                        {
                            Data.map(({ id, photo, naam }) => (
                                <Skillcard name={naam} img={photo} key={id} />
                            ))
                        }
                    </div>
                    <div className='w-full h-28'></div>
                </div>
            </div>

        </div>
    )
}
export default Certificate