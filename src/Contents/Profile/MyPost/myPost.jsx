import React from "react";
import s from "./myPost.module.css";
import Post from "./Posts/posts";
import ProfileInfo from "./ProfileInfo/profileInfo";




const MyPost = (props) => {

    return (
        <div>
            <ProfileInfo />

            <Post likes="24" />
            <Post likes="55" />
        </div>



    )
}



export default MyPost;

