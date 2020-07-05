import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src="https://demo.presscustomizr.com/wp-content/uploads/2016/12/ny_city-1348x500.jpg" width="960" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}
