import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionsTypes, MainStateType} from "../../redux/store";
import {followAC, unfollowAC} from "../../redux/user-reducer";

let mapStateToProps = (state: MainStateType) => {
    return {
        UserPage: state.UserPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => {
    return {
        follow: (id: string)=> dispatch(followAC(id)),
        unfollow: (id: string)=> dispatch(unfollowAC(id))
    }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);