import React from "react";
import {UsersInitialType, UserType} from "../../redux/user-reducer";
import {UserItem} from "./UserItem";

type PropsType = {
    UserPage: UsersInitialType
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users: React.FC<PropsType> = ({UserPage: {users}, follow, setUsers, unfollow}) => {

    if (users.length === 0) setUsers([
        {
            id: "1",
            avatar: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
            following: false,
            fullName: "Izolda",
            status: "cilling",
            location: {country: "Russia", city: "Novosibirsk"}
        },
        {
            id: "2",
            avatar: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
            following: true,
            fullName: "Ignat",
            status: "job",
            location: {country: "Ukraine", city: "Kiev"}
        },
        {
            id: "3",
            avatar: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
            following: false,
            fullName: "Farhat",
            status: "how you?",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: "4",
            avatar: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
            following: true,
            fullName: "Amrod",
            status: "Great job fabrique de italia",
            location: {country: "Italy", city: "Milan"}
        },
    ]);

    let userItem = users.map((user) => <UserItem user={user} follow={follow} unfollow={unfollow}/>)

    return <>{userItem}</>
}