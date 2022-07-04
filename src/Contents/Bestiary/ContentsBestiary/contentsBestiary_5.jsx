import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_5.png";





const ContentsBestiary_5 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="" />
            </div>
            <div className={s.bestiaryText}>
                <h2>Вовкодав</h2>
                <p>
                    Вовкодав - це  наполовину-людина наполовину-вовк. Від обох він бере
                    найгірші і найнебезпечніші якості. Людська спритність і жорстокість
                    з тваринною жагою крові і інстинктом вбивці. Вовкодави стають
                    вовкодавами через прокляття, а тому процес перетворення не може
                    бути ні реалізований, ні контрольований. Вовкодави активні вночі,
                    особливо в повний місяць. Блискавична швидкість, гострі кігті і
                    здатність до регенерації роблять їх надзвичайно грізними ворогами.
                </p>

            </div>

        </div>

    )
}


export default ContentsBestiary_5;




