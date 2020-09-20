import React from "react";
import {connect} from "react-redux";
import {MapDispatchPropsType, MapStatePropsType, Users} from "./Users";
import {actions} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({UserPage: state.UserPage})

export const UserContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {follow: actions.followAC, unfollow: actions.unfollowAC, setUsers: actions.setUsersAC})(Users);