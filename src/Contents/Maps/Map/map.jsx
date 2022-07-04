import React from "react";
import s from "./map.module.css";
import w from "./../../../img/imageMaps/witcher_3_KaerMorhen_1.jpg"



const Map = (props) => {
    return (
        <div>
            <div>
                <img src={w} alt="" className={s.img} />
            </div>
         <div className={s.sky}>
                <div className={s.clouds}>
                </div>
            </div>
        </div>

    )
}




export default Map;



