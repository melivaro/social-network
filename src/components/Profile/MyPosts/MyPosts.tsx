import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";

export function MyPosts() {
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.createPublication}>
                <textarea cols={30} rows={1} placeholder={"Что у вас нового?"}></textarea>
                <button type="submit">Add post</button>
            </div>
            <ul className={s.postsList}>
                <Post message={"Hi, how are you?"} likesCounter={10}/>
                <Post message={"It's my first post "} likesCounter={15}/>
            </ul>
        </div>
    )
}
