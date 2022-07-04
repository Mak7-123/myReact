import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_7.png";





const ContentsBestiary_7 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="alt" />
            </div>

            <div className={s.bestiaryText}>
                <h2>Могильна баба</h2>
                <p>
                Могильна баба харчується в основному людськими останками, особливо 
                гнилим кістковим мозком, який облизує з кісток довгим, гнучким язиком. 
                Однак, коли баба пожирає всі трупи, вона сама починає вбивати людей, а 
                потім закопує їх на кладовищі і чекає, поки вони почнуть розкладатися.
                </p>
            </div>
        </div>

    )
}


export default ContentsBestiary_7;



