import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";
import {PostType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost:()=>void
    updateNewPostText: (newText: string) => void
}


export function MyPosts(props: PropsType) {
    let postItems = props.posts.map(p => <Post id={p.id} message={p.message} likesCounter={p.likesCounter}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    function addPost() {
            props.addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.createPublication}>
                <textarea  onChange={onPostChange} value={props.newPostText} ref={newPostElement} cols={30} rows={1} placeholder={"Что у вас нового?"}/>
                <button type="submit" onClick={addPost}>Add post</button>
            </div>
            <ul className={s.postsList}>
                {postItems}
            </ul>
        </div>
    )
}
