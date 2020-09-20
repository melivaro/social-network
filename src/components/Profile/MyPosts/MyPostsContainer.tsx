import React from "react";
import {actions, InitialStateType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

export type MapStatePropsType = {
    ProfilePage: InitialStateType
}

export type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        ProfilePage: state.ProfilePage
    }
}

export const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPostActionCreator, updateNewPostText: actions.updateNewPostTextActionCreator})(MyPosts);
