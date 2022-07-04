import React from "react";
import s from "./messages.module.css";



const MessagesItem = (props) => {
    return (
    <div className={s.message}>
        <div className={s.text}>
            <textarea>{props.post}</textarea>
           <div className={s.like}></div>
        </div>
    </div>
    )
}

const messageData = [
    { post: "Hello World", likesCount: 12, },
    { post: "What's your name?", likesCount: 23, },
    { post: "My name is Maxim", likesCount: 15, },

];

const MessageElements = messageData.map(el => <MessagesItem post={el.post}  />);

// aaa

const Messages = (props) => {
    return (
        <div className={s.message}>
            {MessageElements}
    
        </div>
    )
}





export default Messages;

