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
    },
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
    },
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
    <div className='w-full h-fit flex flex-col absolute md:gap-10 p-3'>
      <div className='w-full h-fit p-4 flex justify-center items-center'>
        <h1 className=' text-3xl p-3 border-b-2 border-slate-500 font-semibold w-fit'>Recent Projects</h1>
      </div>
      <div className="w-full h-full  m-auto flex flex-col md:flex-row md:flex-wrap justify-start gap-10">
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