import React from "react";
import s from "./Dialogs.module.css"

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                <li className={`${s.dialogItem} ${s.active}`}>Maxim</li>
                <li className={s.dialogItem}>Anna</li>
                <li className={s.dialogItem}>Tayusha</li>
            </ul>
            <ul className={s.messagesList}>
                <li className={s.messageItem}>Hi girls</li>
                <li className={s.messageItem}>happy hoy</li>
                <li className={s.messageItem}>YO!</li>
            </ul>
        </div>
    )
}