import React from "react";
import s from "./fon.module.css";
import fon from "./../../../img/witcherBook.png"
import Dialog from "./Dialog/dialog";
import Messages from "./Messages/messages";


const Fon = (props) => {
    return (
        <div className={s.fon}>
            <img src={fon} alt="alt" />
            <Dialog />
            <Messages />
        </div>
    )
}

export default Fon;








