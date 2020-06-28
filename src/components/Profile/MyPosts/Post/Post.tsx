import React from "react";
import s from "./Post.module.css";

type PostType = {
    message: string,
    likesCounter: number,
}

function Post(props: PostType) {
    console.log(props.message);
    debugger;
    return (
        <div className={s.item}>
            <img src="https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likesCounter}</span>
            </div>
        </div>
    )
}

export default Post;