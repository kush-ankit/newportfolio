import React from 'react'
import Card from '../components/Card'


function Project() {
  const Data = [
    {
      id: 1,
      photo: 'https://i.ibb.co/2KLtFJm/Screenshot-20221230-234827.png',
      naam: 'Portfolio',
      about: 'It includes all my skills, talent, projects and contact details',
      link: '#'
    },
    {
      id: 2,
      photo: 'https://i.ibb.co/M1Gvdw5/Screenshot-20221217-131511.png',
      naam: 'Quiz Portal',
      about: 'It makes your school/collage questions and answer more intresting',
      link: '#'
    },
    {
      id: 3,
      photo: 'https://i.ibb.co/xDhwqC0/Screenshot-2.png',
      naam: 'Mobile App',
      about: 'Making an app that helps you to improve your focus',
      link: '#'
    },
    {
      id: 4,
      photo: 'https://i.ibb.co/cv3k3Yj/Screenshot-20230207-005717.png',
      naam: 'Road Management Portal',
      about: 'It is designed to detect and inform about the condition of the road in a region',
      link: '#'
    },
    {
      id: 5,
      photo: 'https://i.ibb.co/xm8rBxk/Screenshot-20230207-005248.png',
      naam: 'Portfolio v2.0',
      about: 'Improving the frontend skills and performance optimization for better experience',
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
              <Card key={id} num={id} img={photo} name={naam} about={about} link={link} />
          ))
        }
      </div>
      <div className='h-20'></div>
    </div>
  )
}

export default Project