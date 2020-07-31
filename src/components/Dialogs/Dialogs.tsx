import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogPageType} from "../../redux/state";

type PropsType = {
    DialogPage: DialogPageType
}

export function Dialogs(props: PropsType) {

    let dialogItems = props.DialogPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = props.DialogPage.messages.map(m => <MessageItem message={m.message} id={m.id}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                {dialogItems}
            </ul>
            <ul className={s.messagesList}>
                {messageItems}
                <textarea ref={newMessageElement} cols={30} rows={10}></textarea>
                <button onClick={addMessage}>add message</button>
            </ul>
        </div>
    )
}