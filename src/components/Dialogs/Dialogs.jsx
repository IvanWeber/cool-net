import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { NavLink } from "react-router-dom"; 

const Dialogs = (props) => {
    debugger;

    let dialogsElements = props.dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = props.messages.map ( m => <Message message={m.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    )
};

export default Dialogs;


