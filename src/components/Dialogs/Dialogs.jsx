import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { NavLink } from "react-router-dom"; 

const Dialogs = (props) => {
    debugger;
    // let dialogs = [
    //     { id: 1, name: 'Андрей'}, 
    //     { id: 2, name: 'Иван'}, 
    //     { id: 3, name: 'Анна'}, 
    //     { id: 4, name: 'Сергей'}
    // ];

    let dialogsElements = props.dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );

    // let messages = [
    //     { id: 1, message: 'Hi'}, 
    //     { id: 2, message: 'How are you?'}, 
    //     { id: 3, message: 'Yo yo'}, 
    //     { id: 4, message: "I'm okay"}
    // ];

    let messagesElements = props.messages.map ( m => <Message message={m.message} />)

    
    {console.log(props.dialogs)}
 
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;


