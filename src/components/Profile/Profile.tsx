import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost:()=>void
    updateNewPostText: (newText: string) => void
}

export function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

