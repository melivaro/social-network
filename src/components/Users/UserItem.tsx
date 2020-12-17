import React from "react";
import {UserType} from "../../types/entities";
import userPhoto from "../../assets/images/ContraAV.jpg"
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UserType
    follow: (id: number)=> void
    unfollow: (id: number)=> void
    followingInProgress: Array<number>
}

export const UserItem: React.FC<PropsType> = React.memo(({user, follow, unfollow, followingInProgress}) => {
    const {id, followed, name, uniqueUrlName, status, large, small} = {...user, ...user.photos}
console.log('user item')
    let onFollowButton = () => follow(id)
    let onUnfollowButton = () => unfollow(id)

    return (
        <div>
            <NavLink to={"/profile/" + id}><img src={small !== null ? small : userPhoto} alt="" width={100} height={100}/></NavLink>
            <div>{name}</div>
            <div>{status}</div>
            {/*<div>{`${country} ${city}`}</div>*/}
            {followed ? <button disabled={followingInProgress.some(uId=> uId === id)} onClick={onUnfollowButton}>unfollow</button> :
                <button disabled={followingInProgress.some(uId=> uId === id)} onClick={onFollowButton}>follow</button>}
        </div>
    )
})