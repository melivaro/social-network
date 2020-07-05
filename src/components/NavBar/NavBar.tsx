import React from "react";
import s from "./NavBar.module.css";

export function NavBar() {
    return (
        <nav className={s.navigation}>
            <ul className={s.list}>
                <li className={s.item}>Profile</li>
                <li className={`${s.item} ${s.active}`}>Message</li>
                <li className={s.item}>News</li>
                <li className={s.item}>Music</li>
                <li className={s.item}>Settings</li>
            </ul>
        </nav>
    )
}
