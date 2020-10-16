import {InferActionTypes} from "../types/entities";
import {Reducer} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";

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
}

export type ActionTypes = InferActionTypes<typeof actions>

export const authReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.data, isAuth: state.isAuth = true}
        }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (data: DataType) => ({type: "SET_USER_DATA", data} as const),
}

export const thunks = {
    authTC: (): AppThunk => dispatch => {
        authAPI.authMe()
            .then(data => data.resultCode === 0 && dispatch(actions.setAuthUserData(data.data)))
    }
}