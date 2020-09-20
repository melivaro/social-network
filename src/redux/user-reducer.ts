import {Reducer} from "redux";
import {InferActionTypes, UserType} from "../types/entities";

export type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: [] as Array<UserType>
}

export const userReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, following: true} : u)
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, following: false} : u)
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    followAC: (userId: string) => ({type: "FOLLOW", userId,} as const),
    unfollowAC: (userId: string) => ({type: "UNFOLLOW", userId,} as const),
    setUsersAC: (users: Array<UserType>) => ({type: "SET_USERS", users,} as const),
}

