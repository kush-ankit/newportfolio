import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Load from './components/Load'
import Layout from './Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Project from './pages/Project'

function Main() {
  return (
    <div>
        <div className='h-full w-full'>
                <div className=' h-full w-full'>
                    <Suspense fallback={<div><Load size={2} /></div>}>
                        <Routes>
                            <Route path='/' element={<Layout />}>
                                <Route index element={< Home />}></Route>
                                <Route path='/projects' element={< Project />}></Route>
                                <Route path='/skills' element={< Experience />}></Route>
                                <Route path='/contact' element={< Contact />}></Route>
                                <Route path='/about' element={< About />}></Route>
                            </Route>
                        </Routes>
                    </Suspense>
                </div>
            </div >
    </div>
  )
}

export default Main