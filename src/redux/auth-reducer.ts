import {InferActionTypes} from "../types/entities";
import {Reducer} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string
}

export const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: '',
}

export type ResAuthMeType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

export type ActionTypes = InferActionTypes<typeof actions>

export const authReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
        case "SET_CAPTCHA_URL": {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (payload: ResAuthMeType) => ({type: "SET_USER_DATA", payload} as const),
    setCaptchaUrl: (captchaUrl: string) => ({type: 'SET_CAPTCHA_URL', payload: {captchaUrl}} as const),
}

export const thunks = {
    authTC: (): AppThunk => dispatch => {
        return authAPI.authMe()
            .then(data => {
                data.resultCode === 0 && dispatch(actions.setAuthUserData({...data.data, isAuth: true}))
            })
    },
    login: (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(thunks.authTC())
        } else {
            if (data.resultCode === 10) {
                dispatch(thunks.getCaptchaUrl())
            }
            data.messages.length !== 0 ?
                dispatch(stopSubmit('login', {_error: data.messages[0]}))
                : dispatch(stopSubmit('login', {_error: "some error"}))
        }
    },
    logout: (): AppThunk => dispatch => {
        authAPI.logout()
            .then(data => data.resultCode === 0 && dispatch(actions.setAuthUserData({
                id: null,
                login: null,
                email: null,
                isAuth: false
            })))
    },
    getCaptchaUrl: (): AppThunk => async (dispatch) => {

        const result = await securityAPI.getCaptcha()
        const captchaUrl = result.url
        dispatch(actions.setCaptchaUrl(captchaUrl))
    }
}