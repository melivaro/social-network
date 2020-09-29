import {Reducer} from "redux";
import {InferActionTypes, UserType} from "../types/entities";

export type InitialStateType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
}

const initialState: InitialStateType = {
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
}

export const userReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET_USERS":
            return {...state, users: [...action.users]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_COUNT":
            return {...state, totalCount: action.usersCount}
        default:
            return state
    }
}

export type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    followAC: (userId: string) => ({type: "FOLLOW", userId,} as const),
    unfollowAC: (userId: string) => ({type: "UNFOLLOW", userId,} as const),
    setUsersAC: (users: Array<UserType>) => ({type: "SET_USERS", users,} as const),
    setCurrentPageAC: (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const),
    setTotalCountAC: (usersCount: number) => ({type: "SET_TOTAL_COUNT", usersCount} as const),
}

