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

    let dialogsData = [
        {id: 1, name:'Kseniia'},
        {id: 2, name:'Nikita'},
        {id: 3, name:'Natalia'},
        {id: 4, name:'Tatiana'},
        {id: 5, name:'Anna'},
        {id: 6, name:'Maria'}
    ];

    let messagesData = [
        {id: 1, text:'Hi'},
        {id: 2, text:'How are you?'},
        {id: 3, text:'I am fine'}
    ];
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsData.map(<Dialogs id='a.id' name = 'a.name'/>)}
            </div>
            <div className={classes.messages}>
                {messagesData.map(<Message id='a.id' text = 'a.text'/>)}
            </div>
        </div>
    );
};

export default Dialogs;