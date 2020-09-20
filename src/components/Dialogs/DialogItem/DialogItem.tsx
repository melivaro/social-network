import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../types/entities";

export const DialogItem: React.FC<DialogType> = ({id, name}) => {
    return <li className={s.dialogItem}>
        <NavLink to={"/dialogs/" + id} activeClassName={s.active}>
            {name}
        </NavLink>
    </li>
}