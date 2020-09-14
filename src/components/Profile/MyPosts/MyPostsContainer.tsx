import React, {Dispatch} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionsTypes, MainStateType, ProfilePageType} from "../../../redux/store";

// type PropsType = {
//     store: StoreType
// }

// export function MyPostsContainer() {
//
//     return (
//         <StoreContext.Consumer>
//             { store => {
//                 //@ts-ignore
//                 let state = store.getState().ProfilePage
//
//                 function addPost() {
//                     //@ts-ignore
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 const onPostChange = (text: string) => {
//                     //@ts-ignore
//                     store.dispatch(updateNewPostTextActionCreator(text))
//                 }
//
//                 //@ts-ignore
//             return    <MyPosts addPost={addPost} updateNewPostText={onPostChange} ProfilePage={state}/>
//             }
//             }
//         </StoreContext.Consumer>
//         )
// }


type MapStateToPropsType = (state: MainStateType) => {
    ProfilePage: ProfilePageType
}

type MapDispatchToPropsType = (dispatch: Dispatch<ActionsTypes>) => {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps: MapStateToPropsType = (state) => {
    return {
        ProfilePage: state.ProfilePage
    }
}

let mapDispatchToProps: MapDispatchToPropsType = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
