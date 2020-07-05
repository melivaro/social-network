import React from "react";
import s from "./NavBar.module.css";

export function NavBar() {
    return (
        <nav className={s.navigation}>
            <ul className={s.list}>
                <li className={s.item}><a href={"/profile"}>Profile</a></li>
                <li className={`${s.item} ${s.active}`}><a href={"/dialogs"}>Message</a></li>
                <li className={s.item}><a href={"/news"}>News</a></li>
                <li className={s.item}><a href={"/music"}>Music</a></li>
                <li className={s.item}><a href={"/settings"}>Settings</a></li>
            </ul>
        </nav>
    )
}
