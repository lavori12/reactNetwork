import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    const onBodyChange = (event) =>{
        props.dispatch(updateNewMessageBodyActionCreator(event.target.value));
    };

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {props.data.dialogsData.map(a => <Dialog id={a.id} name = {a.name}/>)}
            </div>
            <div className={classes.messages}>
                <div>{props.data.messagesData.map(a => <Message id={a.id} text={a.text}/>)}</div>
                <div>
                    <div><textarea onChange={onBodyChange} placeholder='Enter your message' value={props.data.newMessageBody}/></div>
                    <div><button onClick={sendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;