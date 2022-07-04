import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_4.png";





const ContentsBestiary_4 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="alt" />
            </div>

            <div className={s.bestiaryText}>
                <h2>Демон</h2>

                <p>
                Демони - це ходяча гора м'язів, увінчана рогатою головою з ротом, повним 
                гострих зубів. Як і його більш рідкісний родич, бук, демон живе в густих 
                заростях, болотах і болотах. Коли це можливо, він уникає людей. Але якщо 
                це не вдається, він вбиває їх без будь-яких труднощів.
                </p>
                <p>

                </p>



            </div>

        </div>

    )
}


export default ContentsBestiary_4;



