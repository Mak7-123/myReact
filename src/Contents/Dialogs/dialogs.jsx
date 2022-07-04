import React from "react";
import s from "./dialogs.module.css";
import Fon from "./Fon/fon";



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <Fon />
            <div className={s.bloc}>
                {/* <Dialog />
                <Messages /> */}
            </div>
        </div >
    )
}


export default Dialogs;

