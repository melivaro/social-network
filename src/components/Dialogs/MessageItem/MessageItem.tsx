import s from "../Dialogs.module.css";
import React from "react";

export type MessageItemType = {
    id: number
    message: string
}

export const MessageItem: React.FC<MessageItemType> = ({message}) => <li className={s.messageItem}>{message}</li>