import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_9.png";





const ContentsBestiary_9 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="alt" />
            </div>

            <div className={s.bestiaryText}>
                <h2>Баргест</h2>

                <p>
                    Простаки вважають, що вчинення особливо мерзенних вчинків викликає гнів богів у
                    вигляді примарних собак, званих «баргестами», які вночі бродять по вулицях. Навіть
                    якщо це їхнє походження, вони однаково небезпечні для праведних і грішників, бо
                    нападають на обох з однаковою жорстокістю. Відьмаки рідко вірять в богів, але вони
                    також визнають існування баргестів і їх зв'язок з деякими темними подіями в минулому.
                    Однак вони стверджують, що баргести породжені прокляттям або концентрацією злої волі.
                </p>
                <p>

                </p>



            </div>

        </div>

    )
}


export default ContentsBestiary_9;



