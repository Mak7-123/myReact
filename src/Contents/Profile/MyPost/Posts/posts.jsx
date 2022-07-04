import React from "react";
import s from "./posts.module.css";
import w from "./../../../../img/witcherLogo_3.png";
import like from "./../../../../img/like_3.png";







const Posts = (props) => {
    return (
        <div>
            <div className={s.postUser}>
                <img src={w} alt="img" />
            </div>

            <div className={s.like}>
                <img src={like} alt="" />
                <div className={s.num}>
                    {props.likes}
                </div>
            </div>
        </div>
    )
}






export default Posts;