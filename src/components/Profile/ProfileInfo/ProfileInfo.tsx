import React from "react";
import s from "./ProfileInfo.module.css"

export function ProfileInfo() {
    return (
        <div className={s.profileInfo}>
            <div className={s.cover}>
                <img src="https://demo.presscustomizr.com/wp-content/uploads/2016/12/ny_city-1348x500.jpg" width="940"
                     alt=""/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}