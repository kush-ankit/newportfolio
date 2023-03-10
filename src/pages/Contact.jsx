import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';


function Contact() {
  return (
    <div name="Contact" className='w-full h-[90vh] md:h-[80vh] m-auto '>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='md:w-[60%] md:h-[80%] h-[70%] w-[90%] bg-[#7fffd4] rounded-lg shadow-2xl'>
          <div className='h-full w-full flex justify-center '>
            <div className='h-full w-full p-10 pb-0'>
              <h1 className='text-3xl font-bold '>Just say Hello !</h1>
              <p className='font-semibold'>Lets us know more about you !</p>
              <br />
              <div>
                <form action="https://getform.io/f/cf06f0ea-5296-4e01-b7df-d1a47ea6edd4" method='POST' >
                  <div className='flex flex-col gap-3 text-black'>
                    <div className='gap-3 flex flex-col md:flex-row'>
                      <input type="text" name='Firstname' placeholder='Firstname' className='p-2 w-full rounded-lg ' />
                      <input type="text" name='Lastname' placeholder='Lastname' className='p-2 w-full rounded-lg' />
                    </div>
                    <div className='flex gap-3 flex-col md:flex-row'>
                      <input type="text" name='EMail' placeholder='Mail' className='p-2 w-full rounded-lg' />
                      <input type="text" name='Phone' placeholder='Phone' className='p-2 w-full rounded-lg' />
                    </div>
                    <div className='w-full'>
                      <textarea name="Description" className='p-4 rounded-lg w-full ' placeholder='Say Somthing ...' ></textarea>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                      <button className=' px-5 py-2 bg-white text-black rounded-lg'>Submit</button>
                    </div>
                    <br />
                    <br />
                  </div>
                </form>
              </div>
            </div>
            <div className='h-full w-full p-16 hidden md:flex'>
              <div className=' h-full w-full'>
                <h1 className='text-3xl font-bold'>Contact <br /> Information</h1>
                <br />
                <div>
                  <p>Siswa Dixit, Salempur <br /> Deoria, Utter Pradesh <br /> 274509 </p>
                  <p>Call us: +919696117951 </p>
                  <p>Email: er.ankitkush@gmail.com</p>
                </div>
                <br />
                <h1 className='text-3xl font-bold'>Follow us</h1>
                <br />
                <div className='flex text-4xl gap-10'>
                  <a className='text-black' href='https://github.com/kush-ankit'><AiFillGithub /></a>
                  <a className='text-blue-700' href='https://www.linkedin.com/in/ankit-kushwaha-135817227'><AiFillLinkedin /></a>
                  <a className='rounded-lg' style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" }} href='https://instagram.com/kush_ankit_?igshid=ZDdkNTZiNTM='><AiOutlineInstagram /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

//https://getform.io/f/cf06f0ea-5296-4e01-b7df-d1a47ea6edd4