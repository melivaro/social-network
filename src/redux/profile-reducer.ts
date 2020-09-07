import {ActionsTypes, ProfilePageType} from "./store";


enum actionConst {
    ADD_POST = "ADD_POST",
    UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT",
}

const {ADD_POST, UPDATE_NEW_POST_TEXT} = actionConst

let profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCounter: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            // this._callSubscriber(this._state);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            // this._callSubscriber(this._state);
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