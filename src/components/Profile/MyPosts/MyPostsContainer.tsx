import React, {Dispatch} from "react";
import {
    addPostActionCreator,
    ProfileActionType,
    ProfileInitialStateType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStoreType} from "../../../redux/redux-store";

type MapStateType = {
    ProfilePage: ProfileInitialStateType
}

type MapDispatchType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStoreType): MapStateType => ({ProfilePage: state.ProfilePage})

let mapDispatchToProps = (dispatch: Dispatch<ProfileActionType>): MapDispatchType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
