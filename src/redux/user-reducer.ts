import {Reducer} from "redux";

export type UserType = {
    id: string
    fullName: string
    avatar: string
    following: boolean
    status: string
    location: {
        country: string
        city: string
    }
}

export type UsersInitialType = {
    users: Array<UserType>
}

type FollowACType = {
    type: typeof FOLLOW
    userId: string
}
type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: string
}
type SetUserACType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export type UsersActionTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

enum TYPE_AC {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
}

const {FOLLOW, UNFOLLOW, SET_USERS} = TYPE_AC

const initialState: UsersInitialType = {
    users: []
}

export const userReducer: Reducer<UsersInitialType, UsersActionTypes> = (state = initialState, action): UsersInitialType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, following: true} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, following: false} : u)
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: string): FollowACType => {
    return {
        type: FOLLOW,
        userId,
    } as const
}

export const unfollowAC = (userId: string): UnfollowACType => {
    return {
        type: UNFOLLOW,
        userId,
    } as const
}

export const setUsersAC = (users: Array<UserType>): SetUserACType => {
    return {
        type: SET_USERS,
        users,
    } as const
}