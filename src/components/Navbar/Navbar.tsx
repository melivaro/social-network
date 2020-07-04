import React from "react";
import s from "./Navbar.module.css";

export function Navbar() {
    return (
        <nav className={s.navigation}>
            <ul className={s.list}>
                <li className={s.item}>Profile</li>
                <li className={s.item}>Message</li>
                <li className={s.item}>News</li>
                <li className={s.item}>Music</li>
                <li className={s.item}>Settings</li>
            </ul>
        </nav>
    )
}
