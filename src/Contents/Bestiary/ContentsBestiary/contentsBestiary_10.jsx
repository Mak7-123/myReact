import React from "react";
import s from "./contentsBestiary.module.css";
import w from "./../../../img/bestiary/bes_10.png";





const ContentsBestiary_10 = (props) => {
    return (
        <div className={s.bestiary}>

            <div className={s.bestiaryContent}>
                <img src={w} alt="alt" />
            </div>

            <div className={s.bestiaryText}>
                <h1>Вилохвіст</h1>

                <p>
                    Вилохвіст завдячує своєю назвою довгим і гострим виросткам на хвості. Удар ними здатен
                    наскрізь пробити дубовий щит і руку, що його тримає, навіть якщо на ній кольчужна
                    рукавиця. Іншими словами, з вилохвостом, хоч і молодим, жартувати не варто.
                </p>
                <p>
                    Вилохвости — денні істоти. Вони зазвичай полюють на самоті або, рідше, парами.
                    Нападають вони на велику здобич, зокрема й свійських тварин, переважно корів і
                    свиней. Час від часу хапають і людей
                </p>
                <p>
                    Як і всі драконоподібні, вони, незважаючи на чималий розмір, вправно літають і
                    атакують із повітря. Падаючи вниз, вони використовують свою масу, щоб повалити
                    жертву крилами. На землі вони трохи менш рухливі, та все одно небезпечні. Тут
                    вони орудують смертоносним хвостом.
                </p>
                <p>
                    Вік вилохвоста можна визначити по гребеню, який перестає рости лише
                    після смерті.
                </p>
                <h2>Енциклопедія</h2>
                <div className={s.encyclopedia}>
                    <b>Клас:</b><i> Драконіди.</i><br />
                    <b>Зустрічається:</b><i> В всіх природних умовах,
                        переважно в денний час.</i><br />
                    <b>Довжина:</b><i> 10-11 лікття.</i><br />
                    <b>Вага:</b><i> 3-4 центнера.</i><br />
                </div>
            </div>
        </div>

    )
}


export default ContentsBestiary_10;



