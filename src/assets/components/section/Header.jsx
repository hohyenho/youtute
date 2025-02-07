import React from 'react'
import { CiBaseball } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
// import { CiCoins1 } from "react-icons/ci";
// import { CiBoxes } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import Logo from './Header/Logo';
import Menu from './Header/Menu';
import Sns from './Header/Sns';






const Header = () => {
  
    return (
        <header id='header' role='banner'>
            <Logo />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header