import React from "react";
import {UserType} from "../../redux/user-reducer";

type PropsType = {
    user: UserType
    follow: (id: string)=> void
    unfollow: (id: string)=> void
}

export function UserItem(props: PropsType){
    const {id, following, fullName, country, city, avatar, status} = {...props.user, ...props.user.location}

    let onFollowButton = ()=>{
        props.follow(id)
    }
    let onUnfollowButton = ()=>{
        props.unfollow(id)
    }

    return(
        <div>
            <img src={avatar} alt="" width={100} height={100}/>
            <div>{fullName}</div>
            <div>{status}</div>
            <div>{`${country} ${city}`}</div>
            {following? <button onClick={onUnfollowButton}>unfollow</button> : <button onClick={onFollowButton}>follow</button>}
        </div>
    )
}