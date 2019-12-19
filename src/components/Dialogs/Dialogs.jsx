import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <Dialog id='1' name='Ksenia' className={classes.active}/>
                <Dialog id='2' name='Nikita'/>
                <Dialog id='3' name='Natalia'/>
                <Dialog id='4' name='Tatiana'/>
                <Dialog id='5' name='Anna'/>
                <Dialog id='6' name='Maria'/>
            </div>
            <div className={classes.messages}>
                <Message text='Hi'/>
                <Message text='How are you?'/>
                <Message text='I am fine'/>
            </div>
        </div>
    );
};

export default Dialogs;