import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
    <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
})

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name="Андрей" />
                <DialogItem id={2} name="Иван" />
                <DialogItem id={3} name="Анна" />
                <DialogItem id={4} name="Сергей" />
            </div>

            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Yo yo" />
                <Message message="I'm okay" />
            </div>
        </div>
    )
};

export default Dialogs;


