import React from "react";
import {connect} from "react-redux";
import {actions} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {MapDispatchPropsType, MapStatePropsType, Users} from "./Users";


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({UserPage: state.UserPage})

export const UserContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {follow: actions.followAC, unfollow: actions.unfollowAC, setUsers: actions.setUsersAC, setCurrentPage: actions.setCurrentPageAC, setTotalCount: actions.setTotalCountAC})(Users);

