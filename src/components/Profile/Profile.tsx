import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/entities";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {UpdateProfileDataType} from "./ProfileInfo/ProfileDataForm";

type PropsType = {
    profile: ProfileType
    statusObj: {status: string}
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (image: File) => void
    updateProfileData: (data: UpdateProfileDataType) => void
}

export const Profile = (props: PropsType) => {

    return (
        <div className={s.content}>
            <ProfileStatusWithHooks statusObj={props.statusObj} updateStatus={props.updateStatus}/>
            <ProfileInfo updateProfileData={props.updateProfileData} updatePhoto={props.updatePhoto} isOwner={props.isOwner} profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

