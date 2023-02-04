import React from 'react';
import { Link } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
// import Load from './Load';
// import Home from '../pages/Home'
// import Layout from '../Layout';

// const Project = React.lazy(() => import('../pages/Project'));
// const Contact = React.lazy(() => import('../pages/Contact'));
// const About = React.lazy(() => import('../pages/About'));
// const Experience = React.lazy(() => import('../pages/Experience'));



function Navbar() {
    return (
        <div className='h-full w-full'>
            <div className='w-full flex justify-center px-5 fixed z-50 bottom-0 shadow-xl md:hidden '>
                <ul className=" w-full flex justify-evenly  items-center rounded-xl  ">
                    <li className='hover:bg-[#8F6251] hover:text-white py-3 px-4 my-3 rounded-full'>
                        <Link to="/"><AiOutlineHome size={30} />  </Link>
                    </li>
                    <li className='hover:bg-[#8F6251] hover:text-white py-3 px-4 my-3 rounded-full'>
                        <Link to="/about"><BiDetail size={30} /></Link>
                    </li>
                    <li className='hover:bg-[#8F6251] hover:text-white py-3 px-4 my-3 rounded-full'>
                        <Link to="/projects"><FaProjectDiagram size={30} /></Link>
                    </li>
                    <li className='hover:bg-[#8F6251] hover:text-white py-3 px-4 my-3 rounded-full'>
                        <Link to="/skills"><GiSkills size={30} /></Link>
                    </li>
                    <li className='hover:bg-[#8F6251] hover:text-white py-3 px-4 my-3 rounded-full'>
                        <Link to="/contact"><MdOutlineContactSupport size={30} /></Link>
                    </li>
                </ul>
            </div>
            <div className='md:flex hidden w-full px-10 p-6 shadow-lg' style={{borderRadius:"0% 0% 0% 100%"}}>
                <ul className='flex justify-end gap-10 w-full'>
                    <li className='hover:text-blue-500'><Link to="/">Home</Link></li>
                    <li className='hover:text-blue-500'><Link to="/about">About</Link></li>
                    <li className='hover:text-blue-500'><Link to="/projects">Projects</Link></li>
                    <li className='hover:text-blue-500'><Link to="/skills">Skills</Link></li>
                    <li className='hover:text-blue-500'><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar