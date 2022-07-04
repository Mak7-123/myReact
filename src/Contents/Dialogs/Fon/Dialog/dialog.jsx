import React from "react";
import s from "./dialog.module.css";
import { Link } from "react-router-dom";





const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id;
    
    return (
        <div>
            <div className={s.dialogUser}>
                <Link to={path}>{props.name}</Link> 
                
            </div>
        </div>
    )
}



const dialogsData = [
    { name: 'user_1', id: "1", imgUser: './../../../img/users_2.png', },
    { name: 'user_2', id: "2", imgUser: "./../../../img/users/user_2.png",},
    { name: 'user_3', id: "3", imgUser: "./../../../img/users/user_3.png",},
    { name: 'user_4', id: "4", imgUser:  "./../../../img/users/user_4.png",},
    { name: 'user_5', id: "5", imgUser: "./../../../img/users/user_5.png",},
    

];


const dialogsElements = dialogsData.map(el => <DialogsItem name={el.name} id={el.id}  imgUser={el.imgUser}/>);


const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            {dialogsElements}

        </div>
    )
}



export default Dialog;