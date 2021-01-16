import {Reducer} from "redux";
import {InferActionTypes, ProfileType} from "../types/entities";
import {profileAPI, ResultCodes} from "../api/api";
import {AppThunk} from "./redux-store";
import {UpdateProfileDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";

const ADD_POST = 'profile-reducer/ADD_POST'
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE'
const SET_STATUS = 'profile-reducer/SET_STATUS'
const CHANGE_PHOTO = 'profile-reducer/CHANGE_PHOTO'

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
    profile: {} as ProfileType,
    statusObj: {status: ''},
    isSuccessStatus: false,
}

export const profileReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPost,
                    likesCounter: 0
                }],
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, statusObj: action.statusObj, isSuccessStatus: action.isSuccessStatus
            }
        case CHANGE_PHOTO:
            return {
                ...state, profile: {...state.profile, photos: {large: action.data.large, small: action.data.small}}
            }
        default:
            return state
    }
}

export type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    addPostActionCreator: (newPost: string) => ({type: ADD_POST, newPost} as const),
    setUserProfile: (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const),
    setStatus: (statusObj: { status: string }) => ({type: SET_STATUS, statusObj, isSuccessStatus: true} as const),
    changePhoto: (data: { small: string, large: string }) => ({type: CHANGE_PHOTO, data} as const),
}

export const thunks = {
    profileTC: (matchParamsUserId: number, authorizedUserId: number | null, historyProps: any): AppThunk => dispatch => {
        let userId = matchParamsUserId
        authorizedUserId && !userId && (userId = authorizedUserId)
        !userId && historyProps.push("/login")
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(actions.setUserProfile(data))
            })
    },
    statusTC: (userId: number, authorizedUserId: number | null): AppThunk => dispatch => {
        authorizedUserId && !userId && (userId = authorizedUserId)
        profileAPI.getStatus(userId).then(status => {
            dispatch(actions.setStatus({status}))
        })
    },
    updateStatus: (status: string): AppThunk => dispatch => {
        profileAPI.putStatus(status).then(resultCode => {
            if (resultCode === ResultCodes.Success) {
                dispatch(actions.setStatus({status}))
            }
        })
    },
    updatePhoto: (image: File): AppThunk => dispatch => {
        profileAPI.putPhoto(image).then(({resultCode,data}) => {
            if(resultCode === ResultCodes.Success) {
                dispatch(actions.changePhoto(data.photos))
            }
        })
    },
    updateProfileData: (data: UpdateProfileDataType): AppThunk=> (dispatch, getState) => {
        const userId = getState().ProfilePage.profile.userId
        profileAPI.putProfileData(data).then(res => {
            if(res.resultCode === ResultCodes.Success){
                profileAPI.getProfile(userId)
                    .then(data => {
                        dispatch(actions.setUserProfile(data))
                    })
            }
        })
    }
}