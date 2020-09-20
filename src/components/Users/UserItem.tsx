import React from "react";
import {UserType} from "../../types/entities";

type PropsType = {
    user: UserType
    follow: (id: string)=> void
    unfollow: (id: string)=> void
}

export const UserItem: React.FC<PropsType> = ({user, follow, unfollow}) => {
    const {id, following, fullName, country, city, avatar, status} = {...user, ...user.location}

    let onFollowButton = () => follow(id)
    let onUnfollowButton = () => unfollow(id)

    return (
        <div>
            <img src={avatar} alt="" width={100} height={100}/>
            <div>{fullName}</div>
            <div>{status}</div>
            <div>{`${country} ${city}`}</div>
            {following ? <button onClick={onUnfollowButton}>unfollow</button> :
                <button onClick={onFollowButton}>follow</button>}
        </div>
    )
}