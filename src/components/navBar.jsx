import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineContactSupport } from 'react-icons/md';
import Home from './Home';
import Contact from './Contact';
import Project from './Project';
import Experience from './Experience';

function Navbar() {

    return (
        <Router>
            <div className='w-full'>
                <ul className="w-full flex fixed bottom-0 justify-evenly bg-gray-800 items-center z-50">
                    <li className='hover:bg-blue-500 p-3 m-2 rounded-lg'>
                        <Link to="/"><AiOutlineHome size={30} /></Link>
                    </li>
                    <li className='hover:bg-blue-500 p-3 m-2 rounded-lg'>
                        <Link to="/projects"><FaProjectDiagram size={30} /></Link>
                    </li>
                    <li className='hover:bg-blue-500 p-3 m-2 rounded-lg'>
                        <Link to="/skills"><GiSkills size={30} /></Link>
                    </li>
                    <li className='hover:bg-blue-500 p-3 m-2 rounded-lg'>
                        <Link to="/contact"><MdOutlineContactSupport size={30} /></Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/projects' element={< Project />}></Route>
                    <Route exact path='/skills' element={< Experience />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar