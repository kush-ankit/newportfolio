import React from 'react';
import { Link } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { TbCertificate } from 'react-icons/tb';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import './Navbar.css';



function Navbar() {
    return (
        <div className='h-full w-full'>
            <div className='w-full flex justify-center fixed z-50 bottom-0 md:hidden'>
                <ul className=" w-full flex justify-evenly items-center bg-zinc-600 p-2">
                    <li className='hex'>
                        <Link to="/"><AiOutlineHome size={30} />  </Link>
                    </li>
                    <li className='hex'>
                        <Link to="/about"><BiDetail size={30} /></Link>
                    </li>
                    <li className='hex'>
                        <Link to="/projects"><FaProjectDiagram size={30} /></Link>
                    </li>
                    <li className='hex'>
                        <Link to="/skills"><TbCertificate size={30} /></Link>
                    </li>
                    <li className='hex'>
                        <Link to="/contact"><MdOutlineContactSupport size={30} /></Link>
                    </li>
                </ul>
            </div>
            <div className='md:flex hidden w-full p-6 shadow-lg' style={{ borderRadius: "0% 0% 0% 100%" }}>
                <ul className='flex justify-end gap-3 w-full'>
                    <li className='hover:bg-[#F5F5F5] px-3 py-1 rounded-md hover:shadow-md'><Link to="/">Home</Link></li>
                    <li className='hover:bg-[#F5F5F5] px-3 py-1 rounded-md hover:shadow-md'><Link to="/about">About</Link></li>
                    <li className='hover:bg-[#F5F5F5] px-3 py-1 rounded-md hover:shadow-md'><Link to="/projects">Projects</Link></li>
                    <li className='hover:bg-[#F5F5F5] px-3 py-1 rounded-md hover:shadow-md'><Link to="/skills">Certificates</Link></li>
                    <li className='hover:bg-[#F5F5F5] px-3 py-1 rounded-md hover:shadow-md'><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar