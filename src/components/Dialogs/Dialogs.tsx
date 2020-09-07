import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {
    ActionsTypes,
    DialogPageType,
} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

type PropsType = {
    DialogPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: PropsType) {

    let dialogItems = props.DialogPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = props.DialogPage.messages.map(m => <MessageItem message={m.message} id={m.id}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }
    const onChangeMessageText = () => {
        if (newMessageElement.current) {
            props.dispatch(updateNewMessageTextActionCreator(newMessageElement.current.value))
        }
    }

    const onSendMessageKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            onSendMessageClick()
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
                        onKeyPress={onSendMessageKeyPress}
                        value={props.DialogPage.newMessageText}
                        onChange={onChangeMessageText}
                        ref={newMessageElement}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send message</button>
                </div>
            </ul>
        </div>
    )
}