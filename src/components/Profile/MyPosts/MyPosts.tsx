import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";
import {ProfilePageType} from "../../../redux/state";



export function MyPosts(props: ProfilePageType) {
    let postItems = props.posts.map(p => <Post id={p.id} message={p.message} likesCounter={p.likesCounter}/>)
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
