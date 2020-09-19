import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemType = {
    id: number
    name: string
}

export const DialogItem: React.FC<DialogItemType> = ({id, name}) => {
    return <li className={s.dialogItem}>
        <NavLink to={"/dialogs/" + id} activeClassName={s.active}>
            {name}
        </NavLink>
    </li>
}