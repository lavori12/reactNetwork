import React from 'react';
import classes from './Dialogs.module.css';
//import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {props.data.dialogsData.map(a => <Dialog id={a.id} name = {a.name}/>)}
            </div>
            <div className={classes.messages}>
                {props.data.messagesData.map(a => <Message id={a.id} text = {a.text}/>)}
            </div>
        </div>
    );
};

export default Dialogs;