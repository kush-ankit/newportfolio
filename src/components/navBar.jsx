import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';



const NavBar = () => {
    const [Nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Home",
            goto:"Home"
        },
        {
            id: 2,
            link: "About",
            goto:"About"
        },
        {
            id: 3,
            link: "Experience",
            goto:"Experience"
           
        },
        {
            id: 4,
            link: "Project",
            goto:"Project"
        },
        {
            id: 5,
            link: "Contact",
            goto:"Contact",
        }
    ]
    const [isClicked, changeColor] = useState(true)

    const styles = {

        change: {
            backgroundColor: isClicked ? "#c29591" : ""
            
        }
    }


    useEffect(() => {
        const onScroll = () => changeColor(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => changeColor(current => !current);
    }, []);



    return (
        <div style={styles.change} id='change' className="flex flex-row justify-between p-3 md:p-4 fixed w-full items-center bg-opacity-30 ">

            <div className="text-5xl font-bold font-Caveat underline underline-offset-4 px-3">
                Ankit
            </div>
            <ul className="hidden md:flex flex-row justify-between   ">
                {
                    links.map(({ id, link,goto}) => (
                        <li target="_blank" rel="noreferrer" key={id} className="px-5 cursor-pointer ">
                           <Link to={goto} smooth duration={500}>{link}</Link>
                        </li>
                    ))
                }
            </ul>
            <div onClick={() => setNav(!Nav)} className='md:hidden cursor-pointer pr-4 z-10 '>
                {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {Nav && (          
                <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 text-4xl m-5 w-4/5 h-fit center bg-gradient-to-b from-white to-[#b6c199] rounded-xl">
                    {
                        links.map(({ id, link,goto }) => (
                            <li target="_blank" rel="noopener noreferrer" key={id} className="px-4 py-6 cursor-pointer ">
                                <Link onClick={()=> setNav(!Nav)} to={goto} smooth duration={500}>{link}</Link>
                            </li>
                        ))

                    }
                </ul>
            )}
        </div>
    )
}

export default NavBar