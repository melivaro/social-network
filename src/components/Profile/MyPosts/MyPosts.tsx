import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";
import {ActionsTypes, addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


export function MyPosts(props: PropsType) {
    let postItems = props.posts.map(p => <Post id={p.id} message={p.message} likesCounter={p.likesCounter}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();


    function addPost() {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(updateNewPostTextActionCreator(text))
        }

    }

    const onKeyAddPostHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13){
            addPost()
        }
    }


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.createPublication}>
                <textarea
                    onKeyPress={onKeyAddPostHandler}
                    onChange={onPostChange}
                    value={props.newPostText}
                    ref={newPostElement}
                    placeholder={"Что у вас нового?"}
                />
                <button type="submit" onClick={addPost}>Add post</button>
            </div>
            <ul className={s.postsList}>
                {postItems}
            </ul>
        </div>
    )
}
