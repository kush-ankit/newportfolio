import React from 'react'
import Card from '../components/Card'



function Project() {
  const Data = [
    {
      id: '1',
      photo: 'https://i.ibb.co/2KLtFJm/Screenshot-20221230-234827.png',
      naam: 'Portfolio Website',
      about: 'It includes all my skills, talent, projects and contact details',
      link: '#'
    },
    {
      id: '2',
      photo: 'https://i.ibb.co/M1Gvdw5/Screenshot-20221217-131511.png',
      naam: 'Portfolio Website',
      about: 'It includes all my skills, talent, projects and contact details',
      link: '#'
    },
    {
      id: '3',
      photo: 'https://i.ibb.co/xDhwqC0/Screenshot-2.png',
      naam: 'Portfolio Website',
      about: 'It includes all my skills, talent, projects and contact details',
      link: '#'
    }
  ]


  return (
    <div className='w-full h-full flex flex-col md:gap-4 md:justify-center md:items-center p-3 md:overflow-hidden overflow-scroll bg-slate-300'>
      <div className='w-full h-fit p-4 flex justify-center'>
        <h1 className='text-3xl p-3 border-b-2 border-slate-500 font-semibold w-fit'>Recent Projects</h1>
      </div>
      <div className="w-full h-full  m-auto flex flex-col md:flex-row gap-4 ">
        {
          Data.map(({ id, photo, naam, about, link }) => (
            <Card key={id} img={photo} name={naam} about={about} link={link} />
          ))
        }

      </div>
    </div>
  )
}

export default Project