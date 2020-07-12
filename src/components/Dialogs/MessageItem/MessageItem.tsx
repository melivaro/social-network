import s from "../Dialogs.module.css";
import React from "react";
import {MessageItemType} from "../../../index";


export function MessageItem(props: MessageItemType) {
    return (
        <li className={s.messageItem}>{props.message}</li>
    )
}