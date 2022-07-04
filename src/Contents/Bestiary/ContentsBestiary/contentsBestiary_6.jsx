import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_6.png";





const ContentsBestiary_6 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="" />
            </div>
            <div className={s.bestiaryText}>
                <h2>Альгуль</h2>


                <p>
                    Альгул відрізняється від звичайного упира розмірами, міцністю, забарвленням,
                    а головне - спритністю. Якщо упирі і гравери - примітивні істоти, нездатні
                    спланувати найпростішу засідку, то альгулі і їх різновиди, такі як кладовища,
                    вміють розраховувати, а через це набагато небезпечніше.
                </p>
            </div>

        </div>

    )
}


export default ContentsBestiary_6;




