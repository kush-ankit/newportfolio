import React from 'react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Skillcard from '../components/Skillcard'
import './Certificate.css'


function Certificate() {

    const Data = [
        {
            id: '1',
            photo: 'https://i.ibb.co/546wkjs/Cloud-Core-Badge20220920-46-y4rcwq.jpg',
            naam: 'Cloud Core',
            describe: 'hello Cloud core',
        },
        {
            id: '2',
            photo: 'https://i.ibb.co/1LxhpFm/certifi.jpg',
            naam: 'Build Your Own Chatbot',
            describe: 'hello build your own chatbot',
        },
        {
            id: '3',
            photo: 'https://i.ibb.co/3Yfk275/sscertifica.jpg',
            naam: 'Data Science',
            describe: 'hello data science',

        }
    ]
    return (
        <div name='Skills' className='w-full h-full'>
            <div className='w-full h-full flex flex-col gap-5'>
                <div className='font-semibold text-3xl flex justify-center items-center'>
                    <h1 className='w-fit border-b-2 border-slate-500 pt-5 p-3 '>Certificates</h1>
                </div>
                <div className='w-full h-full'>
                    <div className='hidden md:flex kodfun-galeri md:flex-row flex-col '>
                        {
                            Data.map(({ id, photo, naam, describe }) => (
                                <Skillcard name={naam} img={photo} key={id} describe={describe} />
                            ))
                        }
                    </div>
                    <div className='md:hidden flex flex-col gap-10'>
                        {
                            Data.map(({ id, photo, naam, describe }) => (
                                <Skillcard name={naam} img={photo} key={id} describe={describe} />
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