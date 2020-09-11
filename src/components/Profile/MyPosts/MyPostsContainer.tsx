import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";
import {MainStateType} from "../../../redux/store";

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

let mapStateToProps = (state: MainStateType) => {
    return {
        ProfilePage: state.ProfilePage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: ()=> dispatch(addPostActionCreator()),
        updateNewPostText: (text: string)=> dispatch(updateNewPostTextActionCreator(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
