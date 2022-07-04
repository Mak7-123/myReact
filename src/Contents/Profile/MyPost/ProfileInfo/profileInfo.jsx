import React from "react";
import s from "./profileInfo.module.css";




const ProfileInfo = (props) => {
    return (
        <div className={s}>
            <div className={s.profileBlock}>
                <div>
                    <textarea className={s.text}></textarea>
                </div>
                <div>
                    <button className={s.click}>Click</button>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;