import {InferActionTypes} from "../types/entities";
import {Reducer} from "redux";
import {authAPI, ResultCodes, ResultCodesForCaptcha, securityAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth-reducer/SET_USER_DATA"
const SET_CAPTCHA_URL = "auth-reducer/SET_CAPTCHA_URL"

export type InitialStateType = typeof initialState

export const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: '',
}

export type ActionTypes = InferActionTypes<typeof actions>

export const authReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL: {
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
    setAuthUserData: (payload: InitialStateType) => ({type: SET_USER_DATA, payload} as const),
    setCaptchaUrl: (captchaUrl: string) => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}} as const),
}

export const thunks = {
    authTC: (): AppThunk => async dispatch => {
        const response = await authAPI.authMe()
        response.resultCode === ResultCodes.Success && dispatch(actions.setAuthUserData({...response.data, isAuth: true, captchaUrl: ''}))
    },
    login: (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodes.Success) {
            dispatch(thunks.authTC())
        } else {
            if (data.resultCode === ResultCodesForCaptcha.CaptchaRequired) {
                dispatch(thunks.getCaptchaUrl())
            }
            data.messages.length !== 0 ?
                dispatch(stopSubmit('login', {_error: data.messages[0]}))
                : dispatch(stopSubmit('login', {_error: "some error"}))
        }
    },
    logout: (): AppThunk => dispatch => {
        authAPI.logout()
            .then(data => data.resultCode === ResultCodes.Success && dispatch(actions.setAuthUserData({
                id: null,
                login: null,
                email: null,
                isAuth: false,
                captchaUrl: '',
            })))
    },
    getCaptchaUrl: (): AppThunk => async (dispatch) => {
        const result = await securityAPI.getCaptcha()
        const captchaUrl = result.url
        dispatch(actions.setCaptchaUrl(captchaUrl))
    }
}