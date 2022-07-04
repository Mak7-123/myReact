import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_8.png";





const ContentsBestiary_8 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="alt" />
            </div>

            <div className={s.bestiaryText}>
                <h2>Привид</h2>

                <p>
                    Дебати священиків і вчених про те, чи дійсно душі померлих відправляються в інший
                    світ, нескінченні. У світ, де на них чекає вічна радість або страждання. Одна річ,
                    з якою обидва погоджуються, - це те, що відбувається з душами, які застрягли в
                    нашому світі. І судячи з плачу, виданих цими істотами, не варто заздрити їх долі.
                </p>
            </div>

        </div>

    )
}


export default ContentsBestiary_8;



