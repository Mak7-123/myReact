import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_12.png";





const ContentsBestiary_12 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="alt" />
            </div>

            <div className={s.bestiaryText}>
                <h2>Крижанний велетень</h2>

                <p>
                Це могутнє стародавнє чудовисько зараз зустрічається рідше, ніж дракони. 
                За зовнішнім виглядом велетень нагадує людину, тільки синій від холоду і 
                росте над деревами. Хоча велетень є розумною істотою, всі спроби спілкуватися 
                з ним закінчуються однаково: швидка і болісна смерть.
                </p>
            </div>

        </div>

    )
}


export default ContentsBestiary_12;



