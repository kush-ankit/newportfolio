import React from 'react'
import { BsLinkedin, BsGithub, BsFillPersonLinesFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

function SocialLinks() {
    const socialLinks = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <BsLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/ankit-kushwaha-135817227',
            style: 'rounded-tr-md',
            download: false,
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <BsGithub size={30} />
                </>
            ),
            href: 'https://github.com/kush-ankit',
            download: false,


        },
        {
            id: 3,
            child: (
                <>
                    Mail <FiMail size={30} />
                </>
            ),
            href: 'mailto:kushwahaankit1425@gmail.com',
            download: false,

        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            download: true,
            style: 'rounded-br-md',
        },

    ];



    return (
        <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {socialLinks.map(({ id, child, href, style, download }) => (
                    <li key={id} className={"ml-[-100px] hover:ml-[-10px] hover:left-0 hover:rounded-r-md duration-300 flex justify-between items-center w-40 h-14 px-4 bg-gray-700 " + style}>
                        <a href={href} className='flex flex-row justify-between items-center w-full text-gray-300' download={download} target="_blank" rel="noopener noreferrer">
                            {child}
                        </a>
                    </li>
                )
                )}




            </ul>
        </div>
    )
}

export default SocialLinks;