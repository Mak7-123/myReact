import React from "react"
import s from "./profileFon.module.css";
import videoFon from "./../../../video/trailer_1.mp4";
import w from './../../../img/playua.png';



const ProfileFon = (props) => {
    return (
        <div>
        <div className={s.main}>
            <video src={videoFon} autoPlay muted loop> </video>       
             
        </div> 
          <h1 className={s.text}>Text</h1>
        </div>

    )
}




        //  <div className={s.main}>
        //             <video src={videoFon} autoPlay loop muted> </video>
        //             <div className={s.content}>
        //                 <img src={w} alt="alt" title="Відео взяте з українського інтернет-видання PlayUa" />
        //             </div>
        //     </div>




export default ProfileFon