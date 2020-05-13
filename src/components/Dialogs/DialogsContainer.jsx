import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from './Dialogs';
import Message from "./Message/Message";
import { NavLink } from "react-router-dom"; 
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/dialogs-reducer'
import {connect} from 'react-redux';


// const DialogsContainer = (props) => {
 
//     return <StoreContext.Consumer> 
//         { (store) => {
            
//     let state = store.getState();

//     let sendMessage = () => {
//         let action = sendMessageActionCreator();
//         store.dispatch(action);
//     }

//     let updateNewMessage = (text) => {
//         let action = updateNewMessageTextActionCreator(text);
//         store.dispatch(action);
//     }
//         return <Dialogs sendMessage={sendMessage} updateNewMessage={updateNewMessage} dialogsPage={state.dialogsPage}/>
//         }
//     }
//     </StoreContext.Consumer>
// };

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


