import React from 'react'
import { CiBaseball } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';
export const headerMenu=[
    {
        title:"Joheyho",
        icon:<CiBaseball />,
        src:"/"
    },
    {
        title:"청와대",
        icon:<CiMoneyBill />,
        src:"/today"
    },
    {
        title:"서울특별시청",
        icon:<CiMoneyBill />,
        src:"/developer"
    },
    {
        title:"인천광역시청",
        icon:<CiMoneyBill />,
        src:"/web"
    },
    {
        title:"수원시청",
        icon:<CiMoneyBill />,
        src:"website"
    },
    {
        title:"청주시청",
        icon:<CiMoneyBill />,
        src:"/gsap",
    },
]
export const searchKeyword=[
    {
        title:"JohyenHo",
        src:"/search/johyenho",
    },
    {
        title:"HTML",
        src:"/search/html",
    },
    {
        title:"CSS",
        src:"/search/css",
    },
    {
        title:"JavaScript",
        src:"/search/javascript",
    },
    {
        title:"Figma",
        src:"/search/figma",
    },
    {
        title:"React",
        src:"/search/react",
    },
    {
        title:"Python",
        src:"/search/python",
    },
    {
        title:"portfolio",
        src:"/search/portfolio",
    },

]
const Menu = () => {
    const location = useLocation();
    return (
        <nav className="header_menu">
            <ul className='menu'>
                {headerMenu.map((menu, key) => (
                    <li className={location.pathname === menu.src ? 'active' : ''} key={key}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}


            </ul>
            <ul className='keyword'>
                {searchKeyword.map((word, key) => (
                    <li key={key} className={location.pathname === word.src ? 'active' : ''}>
                        <Link to={word.src}>{word.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu