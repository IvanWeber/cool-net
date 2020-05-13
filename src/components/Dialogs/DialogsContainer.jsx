import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from './Dialogs';
import Message from "./Message/Message";
import { NavLink } from "react-router-dom"; 
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/dialogs-reducer'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;


