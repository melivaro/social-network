import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {InitialStateType} from "../../redux/dialogs-reducer";

export type PropsType = MapStatePropsType & MapDispatchPropsType

export type MapDispatchPropsType = {
    changeMessageText: (text: string) => void
    sendMessage: () => void
}

export type MapStatePropsType = {
    DialogPage: InitialStateType
}

export function Dialogs({DialogPage, changeMessageText, sendMessage}: PropsType) {

    let dialogItems = DialogPage.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messageItems = DialogPage.messages.map((m) => <MessageItem key={m.id} message={m.message} id={m.id}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const onSendMessageHandler = () => sendMessage()

    const onSendMessageKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => e.charCode === 13 && onSendMessageHandler()

    const onNewMessageChange = () => newMessageElement.current && changeMessageText(newMessageElement.current.value)

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
                        value={DialogPage.newMessageText}
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