import React from "react";
import s from "./navbarMenu.module.css";
import { Link } from "react-router-dom";



const NavbarMenu = (props) => {
    return (
        <div className={s.menuFixet}>
            <div className={s.menu}>
                <div className={s.menu}>
                    <Link to="/../" >Головна</Link>
                </div>
                <div className={s.menu}>
                    <Link to="/../profile" >Профіль</Link>
                </div>
                <div className={s.menu}>
                    <Link to="/../dialogs">Діалог</Link>
                </div>
                <div className={s.menu}>
                    <Link to="/../bestiary">Бестіарій</Link>
                </div>
                <div className={s.menu}>
                    <Link to="/../maps">Мапа</Link>
                </div>
                <div className={s.menu}>
                    <Link to="/../bar">Baraholka</Link>
                </div>                
            </div>
        </div>

    )
}




export default NavbarMenu;
