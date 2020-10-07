import {InferActionTypes} from "../types/entities";
import { Reducer } from "redux";

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

export const authReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA":{
            return {...state, ...action.data, isAuth: state.isAuth = true}
        }
        default:
            return state
    }
}

export type ActionTypes = InferActionTypes<typeof actions>

export type DataType = {
    id: number | null
    login: string | null
    email: string | null
}

export const actions = {
    setAuthUserData: (data: DataType)=> ({type: "SET_USER_DATA", data} as const),
}