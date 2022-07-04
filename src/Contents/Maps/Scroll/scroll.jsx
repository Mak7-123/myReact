import React from 'react';
import s from "./scroll.module.css";
import fas from "./../../../img/like_6.png";

const Scroll = () => {
    return (
        <div>
            <a href="#" className={s.arrowUp}>
                <img src={fas} alt="alt" className={s.fas} />
            </a>
        </div>
    )
}

export default Scroll
