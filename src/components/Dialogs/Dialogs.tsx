import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogPageType,} from "../../redux/store";

type PropsType = {
    DialogPage: DialogPageType
    sendMessage: () => void
    changeMessageText: (value: string) => void
}

export function Dialogs(props: PropsType) {

    let dialogItems = props.DialogPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = props.DialogPage.messages.map(m => <MessageItem message={m.message} id={m.id}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const onSendMessageHandler = () => {
        props.sendMessage()
    }

    const onSendMessageKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            onSendMessageHandler()
        }
    }

    const onNewMessageChange = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.changeMessageText(text)
        }
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                {dialogItems}
            </ul>
            <ul className={s.messagesList}>
                {messageItems}
                <div>
                    <textarea
                        placeholder="Enter your message"
                        onKeyPress={onSendMessageKeyPressHandler}
                        value={props.DialogPage.newMessageText}
                        onChange={onNewMessageChange}
                        ref={newMessageElement}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageHandler}>send message</button>
                </div>
            </ul>
        </div>
    )
}