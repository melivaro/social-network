import {Reducer} from "redux";
import {InferActionTypes, UserType} from "../types/entities";
import {AppThunk} from "./redux-store";
import {usersAPI} from "../api/usersAPI";
import {ResultCodes} from "../api/api";

const FOLLOW = "user-reducer/FOLLOW"
const UNFOLLOW = "user-reducer/UNFOLLOW"
const SET_USERS = "user-reducer/SET_USERS"
const SET_CURRENT_PAGE = "user-reducer/SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "user-reducer/SET_TOTAL_COUNT"
const SET_LOADER = "user-reducer/SET_LOADER"
const SET_DISABLED = "user-reducer/SET_DISABLED"
export type InitialStateType = typeof initialState

const initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of users id
}

export const userReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.usersCount}
        case SET_LOADER:
            return {...state, isFetching: action.isFetching}
        case SET_DISABLED:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({type: FOLLOW, userId,} as const),
    unfollowSuccess: (userId: number) => ({type: UNFOLLOW, userId,} as const),
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users,} as const),
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const),
    setTotalCount: (usersCount: number) => ({type: SET_TOTAL_COUNT, usersCount} as const),
    setLoader: (isFetching: boolean) => ({type: SET_LOADER, isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: SET_DISABLED,
        isFetching,
        userId
    } as const),
}
const {setCurrentPage, setTotalCount, followSuccess, setUsers, unfollowSuccess, setLoader, toggleFollowingProgress} = actions
const {getUsers, getCurrentPage, postFollow, deleteUnfollow} = usersAPI

export const thunks = {
    getUsersTC: (pageSize: number, currentPage: number): AppThunk => dispatch => {
        dispatch(setLoader(true))
        getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(setLoader(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
    },
    getCurrentPageTC: (pageSize: number, pageNumber: number): AppThunk => dispatch => {
        dispatch(setLoader(true))
        dispatch(setCurrentPage(pageNumber))
        getCurrentPage(pageSize, pageNumber)
            .then(data => {
                dispatch(setLoader(false))
                dispatch(setUsers(data.items))
            })
    },
    followTC: (userId: number): AppThunk => dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        postFollow(userId)
            .then(data => {
                data.resultCode === ResultCodes.Success && dispatch(followSuccess(userId))
                dispatch(toggleFollowingProgress(false, userId))
            })
    },
    unfollowTC: (userId: number): AppThunk => dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        deleteUnfollow(userId)
            .then(data => {
                data.resultCode === ResultCodes.Success && dispatch(unfollowSuccess(userId))
                dispatch(toggleFollowingProgress(false, userId))
            })
    },
}