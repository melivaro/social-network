import React from "react";
import s from "./Post.module.css";

function Post() {
    return (
        <div className={s.item}>
            <img src="https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg" alt=""/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;