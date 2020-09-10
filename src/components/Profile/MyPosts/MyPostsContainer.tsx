import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
    store: StoreType
}

export function MyPostsContainer(props: PropsType) {

    let state = props.store.getState().ProfilePage

    function addPost() {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return <MyPosts addPost={addPost} updateNewPostText={onPostChange} ProfilePage={state}/>
}
