import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button type="submit">Add post</button>
            </div>
            <div className={"Posts"}>
                <Post/>
                <Post/>
                <Post/>

            </div>
        </div>
    )
}

export default MyPosts;