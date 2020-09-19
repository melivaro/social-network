import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersActionTypes, UsersInitialType, UserType} from "../../redux/user-reducer";
import {AppStoreType} from "../../redux/redux-store";

type MapStateType = {
    UserPage: UsersInitialType
}

type MapDispatchType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers(users: Array<UserType>): void
}

let mapStateToProps = (state: AppStoreType): MapStateType => ({UserPage: state.UserPage})

let mapDispatchToProps = (dispatch: Dispatch<UsersActionTypes>): MapDispatchType => {
    return {
        follow: (id) => dispatch(followAC(id)),
        unfollow: (id) => dispatch(unfollowAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users)),
    }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);