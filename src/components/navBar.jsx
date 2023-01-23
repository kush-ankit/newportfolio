import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import About from '../pages/About'
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Project from '../pages/Project';
import Experience from '../pages/Experience';




function Navbar() {
    return (
        <div className='h-screen w-full'>   
        <Router>
            <div className='h-full w-full'>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/projects' element={< Project />}></Route>
                    <Route exact path='/skills' element={< Experience />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                    
                </Routes>
                <div className='w-full flex justify-center px-5 absolute bottom-0 shadow-xl md:hidden '>
                    <ul className=" w-full flex justify-evenly  items-center rounded-xl  ">
                        <li className='hover:bg-[#74625A] hover:text-white py-3 px-4 my-3 rounded-full'>
                            <Link to="/"><AiOutlineHome size={30} />  </Link>
                        </li>
                        <li className='hover:bg-[#74625A] hover:text-white py-3 px-4 my-3 rounded-full'>
                            <Link to="/about"><BiDetail size={30} /></Link>
                        </li>
                        <li className='hover:bg-[#74625A] hover:text-white py-3 px-4 my-3 rounded-full'>
                            <Link to="/projects"><FaProjectDiagram size={30} /></Link>
                        </li>
                        <li className='hover:bg-[#74625A] hover:text-white py-3 px-4 my-3 rounded-full'>
                            <Link to="/skills"><GiSkills size={30} /></Link>
                        </li>
                        <li className='hover:bg-[#74625A] hover:text-white py-3 px-4 my-3 rounded-full'>
                            <Link to="/contact"><MdOutlineContactSupport size={30} /></Link>
                        </li>
                    </ul>
                </div>
                <div className='md:flex hidden w-full px-10 top-0 fixed p-5'>
                    <ul className='flex justify-end gap-10 w-full'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </Router>

        </div>
    );
}

export default Navbar