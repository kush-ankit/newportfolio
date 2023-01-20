import React, { /*useState*/ } from 'react'
// import Link from 'react-scroll'

function Test() {

    // const [component, setComponent] = useState('1')




    return (
        <div className='h-screen w-fit'>
            <div className=' h-full bg-slate-700 p-10 flex flex-row justify-center gap-4'>
                <div name='1' className=' h-96 w-full bg-[#ccc] rounded-3xl overflow-hidden'>
                    <div className='h-[80%]'><img src="https://i.ibb.co/nc0gPwp/167212281343-removebg.png" alt="avatar" /></div>
                    <div className='h-full text-4xl bg-gray-900 relative z-20 p-3'>Ankit kushwaha</div>
                </div>
                <div name='1' className=' h-96 w-full bg-[#ccc] rounded-3xl overflow-hidden'>
                    <div className='h-[80%]'><img src="https://i.ibb.co/nc0gPwp/167212281343-removebg.png" alt="avatar" /></div>
                    <div className='h-full text-4xl bg-gray-900 relative z-20 p-3'>Ankit kushwaha</div>
                </div>
                
                    
            </div>
        </div>
    )
}

export default Test