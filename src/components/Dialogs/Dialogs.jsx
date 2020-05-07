import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { NavLink } from "react-router-dom"; 
import {addMessageActionCreator, updateNewMessageText} from '../../Redux/dialogs-reducer'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = props.dialogsPage.messages.map ( m => <Message message={m.message} />)

    let newMessageElement = React.createRef();

    let onAddMessageClick = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text);
    }
 
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            
            <div>
            <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
            <button onClick={onAddMessageClick}>Add post</button>
            </div>{console.log(props)}
        </div>
    )
};

export default Dialogs;


