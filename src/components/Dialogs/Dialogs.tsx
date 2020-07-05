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
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                <DialogItem id={1} name={"Max"}/>
                <DialogItem id={2} name={"Anna"}/>
                <DialogItem id={3} name={"Taisia"}/>
                <DialogItem id={4} name={"Konstantin"}/>
                <DialogItem id={5} name={"Andry"}/>
            </ul>
            <ul className={s.messagesList}>
                <MessageItem text={"Haudy ho!"}/>
                <MessageItem text={"YO"}/>
                <MessageItem text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, similique?"}/>
                <MessageItem text={"Haudy ho!"}/>
                <MessageItem text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae facere maiores maxime quo ut! Illo quidem rerum similique sit ullam?"}/>
                <MessageItem text={"Lorem ipsum dolor sit amet."}/>
                <MessageItem text={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
            </ul>
        </div>
    )
}