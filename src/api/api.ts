import axios from "axios"
import {UserType} from "../types/entities";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'fe73a3ea-2d16-48b8-bac3-a0d380e5c9ca'
    }
})

type UsersDataType = {
    error: null | string
    items: Array<UserType>
    totalCount: number
}

type FollowType = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: number
}

export const usersAPI = {
    getUsers: (pageSize: number, currentPage: number) => {
        return instance.get<UsersDataType>(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    getCurrentPage: (pageSize: number, pageNumber: number) => {
        return instance.get<UsersDataType>(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response => response.data)
    },
    postFollow: (id: number) => {
        return instance.post<FollowType>(`follow/${id}`)
            .then(response => response.data)

    },
    deleteUnfollow: (id: number) => {
        return instance.delete<FollowType>(`follow/${id}`)
            .then(response => response.data)

    },
}