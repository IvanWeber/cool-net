import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from './Dialogs';
import Message from "./Message/Message";
import { NavLink } from "react-router-dom"; 
import {addMessageActionCreator, updateNewMessageText} from '../../Redux/dialogs-reducer'

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }

    let updateNewMessage = (text) => {
        let action = updateNewMessageText(text);
        props.store.dispatch(action);
    }
 
    return (<Dialogs addMessage={addMessage} updateNewMessage={updateNewMessage} dialogsPage={state.dialogsPage}/>)
};

export default DialogsContainer;


