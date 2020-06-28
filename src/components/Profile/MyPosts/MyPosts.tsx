import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";

export function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button type="submit">Add post</button>
            </div>
            <div className={"Posts"}>
                <Post message={"Hi, how are you?"} likesCounter={10}/>
                <Post message={"It's my first post "} likesCounter={15}/>

            </div>
        </div>
    )
}
