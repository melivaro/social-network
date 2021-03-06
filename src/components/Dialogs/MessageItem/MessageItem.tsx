import s from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../types/entities";

export const MessageItem: React.FC<MessageType> = React.memo(({message}) => {
    return <li className={s.messageItem}>{message}</li>
})