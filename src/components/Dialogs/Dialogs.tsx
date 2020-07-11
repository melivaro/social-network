import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
    id: number,
    name: string,
}

function DialogItem(props: DialogItemPropsType) {
    return(
        <li className={s.dialogItem}><NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink></li>
    )
}

type MessageItemPropsType = {
    text: string,
}

function MessageItem(props: MessageItemPropsType) {
    return(
        <li className={s.messageItem}>{props.text}</li>
    )
}

export function Dialogs() {

    let dialogs = [
        {id: 1, name: "Max"},
        {id: 2, name: "Sven"},
        {id: 3, name: "Jim"},
        {id: 4, name: "Victor"},
    ]

    let messages = [
        {id: 1, message: "Haudy ho!"},
        {id: 2, message: "YO"},
        {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, similique?"},
        {id: 4, message: "Lorem ipsum dolor sit amet."},
    ]

    let dialogItems = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = messages.map(m => <MessageItem text={m.message}/>)

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                {dialogItems}
            </ul>
            <ul className={s.messagesList}>
                {messageItems}
            </ul>
        </div>
    )
}