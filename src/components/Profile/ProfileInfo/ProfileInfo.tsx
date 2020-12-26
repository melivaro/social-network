import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../types/entities";
import {Loader} from "../../common/Loader/Loader";
import {ProfileReduxForm, UpdateProfileDataType} from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    updatePhoto: (image: File) => void
    updateProfileData: (data: UpdateProfileDataType) => void
}

export const ProfileInfo = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (Object.keys(props.profile).length === 0) {
        return <Loader/>
    }

    const onChangePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files &&
        props.updatePhoto(e.target.files[0])
    }

    return (
        <div className={s.profileInfo}>
            {props.isOwner && <input type={'file'} onChange={onChangePhoto}/>}
            <img src={props.profile.photos.large} alt="фотография пользователя"/>
            {editMode
                ? <ProfileReduxForm updateProfileData={props.updateProfileData} setEditMode={setEditMode} initialValues={props.profile} contacts={props.profile.contacts}/>
                : <ProfileData setEditMode={setEditMode} profile={props.profile}/>
            }

        </div>
    )
}