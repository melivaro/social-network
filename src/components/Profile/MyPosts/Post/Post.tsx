import React from "react";
import s from "./Post.module.css";

export type PostType = {
    id: number
    message: string
    likesCounter: number
}

export function Post(props: PostType) {

    return (
        <li className={s.item}>
            <img src="https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg" alt=""/>
            <p>{props.message}</p>
            <div>
                <span>like</span>
                <span>{props.likesCounter}</span>
            </div>
        </li>
    )
}
