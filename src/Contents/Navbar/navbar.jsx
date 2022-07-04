import React from "react";
import s from "./navbar.module.css";
import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu/navbarMenu";



const Navbar = (props) => {
    return (
        <nav className={s.navbar}>

            <NavbarMenu />

        </nav >
    )
}

export default Navbar;