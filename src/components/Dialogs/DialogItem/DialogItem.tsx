import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogItemType} from "../../../redux/store";

export function DialogItem(props: DialogItemType) {
    return (
        <li className={s.dialogItem}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </li>
    )
}