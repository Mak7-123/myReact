import React from "react";
import s from "./menuBestiary.module.css";
import { Link } from "react-router-dom";
import w_1 from "./../../../img/bestiary/bes_1.png";
import w_2 from "./../../../img/bestiary/bes_2.png";
import w_3 from "./../../../img/bestiary/bes_3.png";
import w_4 from "./../../../img/bestiary/bes_4.png";
import w_5 from "./../../../img/bestiary/bes_5.png";
import w_6 from "./../../../img/bestiary/bes_6.png";
import w_7 from "./../../../img/bestiary/bes_7.png";
import w_8 from "./../../../img/bestiary/bes_8.png";
import w_9 from "./../../../img/bestiary/bes_9.png";
import w_10 from "./../../../img/bestiary/bes_10.png";
import w_11 from "./../../../img/bestiary/bes_11.png";
import w_12 from "./../../../img/bestiary/bes_12.png";
import w_13 from "./../../../img/bestiary/bes_13.png";
import w_14 from "./../../../img/bestiary/bes_14.png";


const MenuBestiary = (props) => {
    return (
        <div className={s.menuBestiary}>
            <div className={s.menu} >
                <div className={s.logoMenu}>
                    <Link to=''><img src={w_1} alt="" /> Дух лісу</Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes2'><img src={w_2} alt="" />Грифон </Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes3'><img src={w_3} alt="" />Прихований</Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes4'><img src={w_4} alt="" />Демон</Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes5'><img src={w_5} alt="" />Вовкодав </Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes6'><img src={w_6} alt="" />Альгуль</Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes7'><img src={w_7} alt="" />Могильна баба</Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes8'><img src={w_8} alt="" />Привид </Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes9'><img src={w_9} alt="" />Баргест </Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes10'><img src={w_10} alt="" />Вилохвіст </Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes11'><img src={w_11} alt="" />Диявол </Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes12'><img src={w_12} alt="" />Крижанний велетень</Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes13'><img src={w_13} alt="" />Ґюнтер О'Дімм</Link >
                </div>
                <div className={s.logoMenu}>
                    <Link to='bes14'><img src={w_14} alt="" />Деттлафф </Link >
                </div>
            </div>
        </div >
    )
}



export default MenuBestiary;


