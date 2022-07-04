import React from "react";
import s from "./profile.module.css";
import MyPost from './MyPost/myPost';
import ProfileFon from "./ProfileFon/profoleFon";



const Profile = (props) => {
   
    return (
        <div className={s.profile}>
            <ProfileFon />
            <MyPost />

        </div>
    )
}

export default Profile;