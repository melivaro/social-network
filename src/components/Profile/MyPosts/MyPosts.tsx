import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {CustomField} from "../../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../../utils/validators/validators";

type PropsType = MapDispatchPropsType & MapStatePropsType

export const MyPosts: React.FC<PropsType> = ({ProfilePage, addPost}) => {

    let postItems = ProfilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                     likesCounter={p.likesCounter}/>)

    const onAddPost = (formData: FormDataType) => {
        addPost(formData.newPost)
    };
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <MyPostReduxForm onSubmit={onAddPost}/>
            <ul className={s.postsList}>
                {postItems}
            </ul>
        </div>
    )
}

type FormDataType = {
    newPost: string
}
const onHandlerMaxLength = maxLengthCreator(7);

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return <form onSubmit={props.handleSubmit} className={s.createPublication}>
        <Field
            component={CustomField}
            name={"newPost"}
            placeholder={"Что у вас нового?"}
            validate={[required, onHandlerMaxLength]}
            fieldType={"textarea"}
        />
        <button>Add post</button>
    </form>
}

const MyPostReduxForm = reduxForm<FormDataType>({
    form: 'myPosts'
})(AddNewPostForm)