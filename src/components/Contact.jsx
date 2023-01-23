import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';


function Contact() {
  return (
    <div name="Contact" className='w-full h-screen'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[70%] h-[70%] bg-gradient-to-r from-[#6D4C41] via-[#8F6251] to-[#6D4C41] rounded-lg shadow-2xl'>
          <div className='h-full w-full flex justify-center '>
            <div className='h-full w-full p-16 text-[#d8d8d8]'>
              <h1 className='text-3xl font-bold '>Just say Hello !</h1>
              <p className='font-semibold'>Lets us know more about you !</p>
              <br />
              <div>
                <form action="https://getform.io/f/cf06f0ea-5296-4e01-b7df-d1a47ea6edd4" method='POST' >
                  <div className='flex flex-col gap-3'>
                    <div className='gap-3 flex'>
                      <input type="text" name='Firstname' placeholder='Firstname' className='p-2 rounded-2xl opacity-30 text-black' />
                      <input type="text" name='Lastname' placeholder='Lastname' className='p-2 rounded-2xl opacity-30 text-black' />
                    </div>
                    <div className='flex gap-3'>
                      <input type="text" name='EMail' placeholder='Mail' className='p-2 rounded-2xl opacity-30 text-black' />
                      <input type="text" name='Phone' placeholder='Phone' className='p-2 rounded-2xl opacity-30 text-black' />
                    </div>
                    <div>
                      <textarea name="Description" id="1" cols="52" rows="5" className='p-2 rounded-2xl opacity-30 text-black ' placeholder='Say Somthing ...' ></textarea>
                    </div>
                    <div >
                      <button className='border-2 border-gray-500 px-5 py-2 bg-gradient-to-r rounded-lg'>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='h-full w-full p-16'>
              <div className='text-[#d8d8d8] h-full w-full'>
                <h1 className='text-3xl font-bold'>Contact <br /> Information</h1>
                <br />
                <div>
                  <p>Siswa Dixit Salempur <br /> Deoria Utter Pradesh <br /> 274509 </p>
                  <p>Call us: +919696117951 </p>
                  <p>Email: er.ankitkush@gmail.com</p>
                </div>
                <br />
                <h1 className='text-3xl font-bold'>Follow us</h1>
                <br />
                <div className='flex text-xl gap-10'>
                  <div><AiFillGithub /></div>
                  <div><AiFillLinkedin /></div>
                  <div><AiOutlineInstagram /></div>
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