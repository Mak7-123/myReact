import React from "react";
import { Parallax } from "react-parallax";
import s from "./../maps.module.css"
import Map from "./Map/map";





const MapHome = () => {
    return (
        <div className={s.maps}>
            <Parallax bgImage={''} strength={200}>
                <div className={s.img}>
                    <Map />
                </div>
            </Parallax>
            <div className={s.mapsText}>.
                <h1>Каер-Морен</h1>
                <div className={s.mapsText_p}>
                    <p >
                        <b>Каер-Морен</b>, — це прадавня фортеця, що була одним з осередків зародження
                        відьмацтва, та оселею Школи Вовка.
                    </p>
                    <p>
                        Фортеця Старого Моря розташована в горах на півночі <b>Кедвену</b>, біля річки <b>Ґвенллех</b>.
                        Відомо, що перші досліди з мутацій проходили не в фортеці, а в мережі печер біля
                        неї. Саму відьминську цитадель було відбудовано пізніше, скоріше за все, самими
                        чародіями.
                    </p>
                    <p>
                        Після сумнозвісного нападу на фортецю, мутації та тренування відьмаків припинились.
                        Представники <b>Школи Вовка</b>, яких не було в цитаделі під час атаки, прибували до
                        Каер-Морену лише на зимівку. Постійним жителем замку був <b>Весемір з Каер-Морену</b>,
                        єдиний відомий відьмак, що пережив напад.
                    </p>
                    <p>
                        До відьмацького замку можна дістатись лише вузькою стежиною, що проходила через ліси.
                        На ній відьмаки тренували швидкість бігу й контроль дихання. Доріжку звали «Шляхом»,
                        проте молоді відьмаки мали для неї свою власну назву — «Катівня».
                    </p>
                </div>

            </div>
        </div>
    )
}




export default MapHome;

