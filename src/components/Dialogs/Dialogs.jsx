import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const onBodyChange = (event) =>{
        props.updateNewMessageBody(event.target.value);
    };

    const sendMessage = () => {
        props.sendMessage();
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {props.dialogsData.map(a => <Dialog id={a.id} name = {a.name}/>)}
            </div>
            <div className={classes.messages}>
                <div>{props.messagesData.map(a => <Message id={a.id} text={a.text}/>)}</div>
                <div>
                    <div><textarea onChange={onBodyChange} placeholder='Enter your message' value={props.newMessageBody}/></div>
                    <div><button onClick={sendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;