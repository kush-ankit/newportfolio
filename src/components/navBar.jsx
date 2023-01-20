import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import About from './About'
import Home from './Home';
import Contact from './Contact';
import Project from './Project';
import Experience from './Experience';




function Navbar() {
    return (
        <Router>
            <div className='w-full'>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/projects' element={< Project />}></Route>
                    <Route exact path='/skills' element={< Experience />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                </Routes>
                <ul className=" m-2 flex fixed bottom-2 justify-evenly bg-gray-800 items-center z-50 rounded-xl ">
                    <li className='hover:bg-blue-500 py-3 px-4 my-3 rounded-full'>
                        <Link to="/"><AiOutlineHome size={30} />  </Link>
                    </li>
                    <li className='hover:bg-blue-500 py-3 px-4 my-3 rounded-full'>
                        <Link to="/about"><BiDetail size={30} /></Link>
                    </li>
                    <li className='hover:bg-blue-500 py-3 px-4 my-3 rounded-full'>
                        <Link to="/projects"><FaProjectDiagram size={30} /></Link>
                    </li>
                    <li className='hover:bg-blue-500 py-3 px-4 my-3 rounded-full'>
                        <Link to="/skills"><GiSkills size={30} /></Link>
                    </li>
                    <li className='hover:bg-blue-500 py-3 px-4 my-3 rounded-full'>
                        <Link to="/contact"><MdOutlineContactSupport size={30} /></Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
}

export default Navbar