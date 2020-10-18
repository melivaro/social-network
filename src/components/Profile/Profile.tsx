import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/entities";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    // children: React.ReactNode
}

export function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <ProfileStatus  status={props.status} updateStatus={props.updateStatus}/>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

