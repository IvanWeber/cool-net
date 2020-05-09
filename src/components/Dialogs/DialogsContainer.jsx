import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from './Dialogs';
import Message from "./Message/Message";
import { NavLink } from "react-router-dom"; 
import {addMessageActionCreator, updateNewMessageText} from '../../Redux/dialogs-reducer'
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
 
    return <StoreContext.Consumer> 
        { (store) => {
            
    let state = store.getState();

    let addMessage = () => {
        let action = addMessageActionCreator();
        store.dispatch(action);
    }

    let updateNewMessage = (text) => {
        let action = updateNewMessageText(text);
        store.dispatch(action);
    }
        return <Dialogs addMessage={addMessage} updateNewMessage={updateNewMessage} dialogsPage={state.dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
};

export default DialogsContainer;


