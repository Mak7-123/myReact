import React from "react";
import s from "./header.module.css";
import w from "./../../img/witcherLogo_6.png";
import person from "./../../img/witcherLogo_6.png";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.imgLogo}>
                <img src={w} alt="img" />
            </div>


            <div className={s.box}>
                <div className={s.person}>
            <a href="https://github.com/Mak7-123?tab=repositories" target='_blank'><img src='https://avatars.githubusercontent.com/u/96248217?v=4' alt="" title="my github repositories"/></a>
                </div>
            </div>
        </div>
    )
}

export default Header;