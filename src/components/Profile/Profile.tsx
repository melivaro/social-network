import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/entities";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    // children: React.ReactNode
}

export function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

