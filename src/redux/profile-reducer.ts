import {Reducer} from "redux";
import {InferActionTypes, ProfileType} from "../types/entities";

export type InitialStateType = typeof initialState

type PostType = {
    id: number
    message: string
    likesCounter: number
}

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCounter: 10},
        {id: 2, message: "It's my first post", likesCounter: 13},
        {id: 3, message: "Yo!", likesCounter: 17},
    ] as Array<PostType>,
    newPostText: "",
    profile: {} as ProfileType,
}

export const profileReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: state.newPostText,
                    likesCounter: 0
                }],
                newPostText: ''
            }
        case "UPDATE_NEW_POST_TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET_USER_PROFILE":
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

export type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    addPostActionCreator: () => ({type: "ADD_POST"}) as const,
    updateNewPostTextActionCreator: (text: string) => ({type: "UPDATE_NEW_POST_TEXT", newText: text}) as const,
    setUserProfile: (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile}) as const,
}