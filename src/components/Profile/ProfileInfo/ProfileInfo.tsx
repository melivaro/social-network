import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../types/entities";
import {Loader} from "../../common/Loader/Loader";

type PropsType = {
    profile: ProfileType
}

export function ProfileInfo(props: PropsType) {
    if (Object.keys(props.profile).length === 0) {
        return <Loader/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.cover}>
                <img src="https://demo.presscustomizr.com/wp-content/uploads/2016/12/ny_city-1348x500.jpg" width="940"
                     alt=""/>
            </div>
            <div className={s.description}>
                {props.profile.fullName}
                {props.profile.aboutMe}
                {props.profile.lookingForAJobDescription}
                {props.profile.contacts.facebook}
                {props.profile.contacts.github}
                {props.profile.contacts.instagram}
                {props.profile.contacts.mainLink}
                {props.profile.contacts.twitter}
                {props.profile.contacts.vk}
                {props.profile.contacts.website}
                {props.profile.contacts.youtube}
                {props.profile.lookingForAJob}
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    )
}