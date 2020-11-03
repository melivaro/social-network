import {InferActionTypes} from "../types/entities";
import {Reducer} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

export const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export type DataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

export type ActionTypes = InferActionTypes<typeof actions>

export const authReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload, isAuth: action.payload.isAuth}
        }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (payload: DataType) => ({type: "SET_USER_DATA", payload} as const),
}

export const thunks = {
    authTC: (): AppThunk => dispatch => {
        return authAPI.authMe()
            .then(data => {
                data.resultCode === 0 && dispatch(actions.setAuthUserData({...data.data, isAuth: true}))
            })
    },
    login: (email: string, password: string, rememberMe: boolean): AppThunk => dispatch => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(thunks.authTC())
                } else {
                    data.messages.length !== 0 ?
                        dispatch(stopSubmit('login', {_error: data.messages[0]}))
                        : dispatch(stopSubmit('login', {_error: "some error"}))
                }

            })

    },
    logout: (): AppThunk => dispatch => {
        authAPI.logout()
            .then(data => data.resultCode === 0 && dispatch(actions.setAuthUserData({
                id: null,
                login: null,
                email: null,
                isAuth: false
            })))
    }
}