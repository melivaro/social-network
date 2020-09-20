import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MyPostsContainer";

type PropsType = MapDispatchPropsType & MapStatePropsType

export const MyPosts: React.FC<PropsType> = ({ProfilePage, addPost ,updateNewPostText}) => {

    let postItems = ProfilePage.posts.map(p => <Post id={p.id} message={p.message}
                                                     likesCounter={p.likesCounter}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPostHandler = () => addPost()

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => e.charCode === 13 && onAddPostHandler()

    const onPostChangeHandler = () => newPostElement.current && updateNewPostText(newPostElement.current.value)

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.createPublication}>
                <textarea
                    onKeyPress={onKeyPressHandler}
                    onChange={onPostChangeHandler}
                    value={ProfilePage.newPostText}
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
