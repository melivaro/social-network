import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";

export function MyPosts() {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCounter: 10},
        {id: 2, message: "It's my first post", likesCounter: 13},
        {id: 3, message: "Yo!", likesCounter: 17},
    ]

    let postItems = posts.map(p=> <Post message={p.message} likesCounter={p.likesCounter}/>)

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.createPublication}>
                <textarea cols={30} rows={1} placeholder={"Что у вас нового?"}></textarea>
                <button type="submit">Add post</button>
            </div>
            <ul className={s.postsList}>
                {postItems}
            </ul>
        </div>
    )
}
