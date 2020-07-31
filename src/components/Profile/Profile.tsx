import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, PostType} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
    addPost:(postMessage: string)=>void
}

export function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={addPost}/>
        </div>
    )
}

