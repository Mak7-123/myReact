import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_1.png";





const ContentsBestiary_1 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="alt" />
            </div>

            <div className={s.bestiaryText}>
                <h2>Дух лісу</h2>

                <p>
                    Деякі монстри настільки могутні, що люди шанують їх як богів. Так було
                    і з Лешем, який жив у лісі поблизу села Скелліг під назвою Ферлунд.
                    Відьмак, однак, засумнівався в корисності леші. Леші - злі істоти, які
                    піклуються тільки про себе, і істота, що жила з Ферлундом, не стало винятком.
                    Чудовисько здатне зігнути вовків, ворон і навіть дерева до своєї волі і
                    покликати їх на допомогу.
                </p>


            </div>

        </div>

    )
}


export default ContentsBestiary_1;



