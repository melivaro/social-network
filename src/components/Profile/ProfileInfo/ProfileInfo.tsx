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
            <div className={s.description}>
                <img src={props.profile.photos.large} alt="фотография пользователя"/>
                <p><span>Имя: </span>{props.profile.fullName}</p>
                <p><span>Обо мне: </span>{props.profile.aboutMe}</p>
                <p><span>Ищу работу: </span>{props.profile.lookingForAJob}</p>
                <p><span>Описание работы которую ищу: </span>{props.profile.lookingForAJobDescription}</p>
                <p><span>Мой основной контакт: </span>{props.profile.contacts.mainLink}</p>
                <p><span>Мой website: </span>{props.profile.contacts.website}</p>
                <p><span>Мой GitHub: </span>{props.profile.contacts.github}</p>
                <p><span>Мой Facebook: </span>{props.profile.contacts.facebook}</p>
                <p><span>Мой Instagram: </span>{props.profile.contacts.instagram}</p>
                <p><span>Мой Twitter: </span>{props.profile.contacts.twitter}</p>
                <p><span>Мой VK: </span>{props.profile.contacts.vk}</p>
                <p><span>Мой YouTube: </span>{props.profile.contacts.youtube}</p>
            </div>
        </div>
    )
}