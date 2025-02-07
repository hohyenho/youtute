import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
export const snsLink=[
    {
        title:"github",
        url:"",
        icon: <AiFillGithub />,
    },
    {
        title:"youtube",
        url:"https://www.youtube.com",
        icon: <AiOutlineCodepen />,
    },
    {
        title:"codepen",
        url:"https://www.codepen.io",
        icon: <AiFillYoutube />,
    },
    {
        title:"instagram",
        url:"https://www.instagram.com",
        icon: <AiOutlineInstagram />,
    },

]
const Sns = () => {
    return (
        <div className='header_sns'>
            <ul>
                {snsLink.map((link, key) => (
                    <li key={key}>
                        <a href={link.url} rel='noopener noreferrer'>
                            {link.icon}{link.title}
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Sns