import React from "react";
import s from "./clouds.module.css";
import Fon from "./Fon/fon";


const Clouds = (props) => {
    return (
        <div>

            <div className={s.sky}>
                <Fon/>
                <div className={s.cloud}>
                </div>
            </div>
        </div>

    )
}


export default Clouds;



