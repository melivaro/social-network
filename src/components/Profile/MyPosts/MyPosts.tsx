import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";
import {ProfilePageType} from "../../../redux/store";

type PropsType = {
    addPost: () => void
    updateNewPostText: (value: string) => void
    ProfilePage: ProfilePageType
}

export function MyPosts(props: PropsType) {
    let postItems = props.ProfilePage.posts.map(p => <Post id={p.id} message={p.message}
                                                           likesCounter={p.likesCounter}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    function onAddPostHandler() {
        props.addPost()
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            onAddPostHandler()
        }
    }

    const onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.createPublication}>
                <textarea
                    onKeyPress={onKeyPressHandler}
                    onChange={onPostChangeHandler}
                    value={props.ProfilePage.newPostText}
                    ref={newPostElement}
                    placeholder={"Что у вас нового?"}
                />
                <button type="submit" onClick={onAddPostHandler}>Add post</button>
            </div>
            <ul className={s.postsList}>
                {postItems}
            </ul>
        </div>
    )
}
