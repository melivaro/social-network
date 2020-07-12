import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogPageType} from "../../index";


export function Dialogs(props: DialogPageType) {

    let dialogItems = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = props.messages.map(m => <MessageItem message={m.message} id={m.id}/>)

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