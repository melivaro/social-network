import {ActionsTypes, ProfilePageType} from "./store";

enum actionConst {
    ADD_POST = "ADD_POST",
    UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT",
}

const {ADD_POST, UPDATE_NEW_POST_TEXT} = actionConst

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCounter: 10},
        {id: 2, message: "It's my first post", likesCounter: 13},
        {id: 3, message: "Yo!", likesCounter: 17},
    ],
    newPostText: ""
}

let profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCounter: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    } as const
}

export default profileReducer