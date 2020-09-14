import React from "react";
import {UserPageType} from "../../redux/user-reducer";
import { UserItem } from "./UserItem";

type PropsType = {
    UserPage: UserPageType
    follow: (id: string)=> void
    unfollow: (id: string)=> void
}

export function Users(props: PropsType){


    let us = props.UserPage.users.map(user => <UserItem user={user} follow={props.follow} unfollow={props.unfollow}/>)

    return <>{us}</>
}