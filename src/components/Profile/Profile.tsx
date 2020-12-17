import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/entities";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

type PropsType = {
    profile: ProfileType
    statusObj: {status: string}
    updateStatus: (status: string) => void
}

export const Profile = (props: PropsType) => {

    return (
        <div className={s.content}>
            <ProfileStatusWithHooks statusObj={props.statusObj} updateStatus={props.updateStatus}/>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

