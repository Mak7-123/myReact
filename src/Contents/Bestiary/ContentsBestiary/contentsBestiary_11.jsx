import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_11.png";





const ContentsBestiary_11 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="alt" />
            </div>

            <div className={s.bestiaryText}>
                <h2>Диявол</h2>
                <p>
                    Диявол є молодшим двоюрідним братом демона і бука. Деякі люди думають,
                    що через менші розміри його не варто боятися. І він робить помилку, одну
                    з тих, які можна зробити лише один раз в житті. Дияволи, що живуть в лісі,
                    є одними з найнебезпечніших монстрів з усіх відомих людині. Через своїх
                    розмірів дияволи практично нечутливі до впливу ознаки Аарда, а здатність
                    до регенерації дозволяє йому напрочуд швидко відновитися навіть від серйозних ран.
                </p>

            </div>

        </div>

    )
}


export default ContentsBestiary_11;



