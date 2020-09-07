import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type PropsType = {
    profilePage: ProfilePageType
    dispatch:(action: ActionsTypes)=>void
}

export function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                newPostText={props.profilePage.newPostText}
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
            />
        </div>
    )
}

