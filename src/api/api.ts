import axios from "axios"
import {ProfileType, UserType} from "../types/entities";
import {UpdateProfileDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'fe73a3ea-2d16-48b8-bac3-a0d380e5c9ca'
    }
})

export type UsersDataType = {
    error: null | string
    items: Array<UserType>
    totalCount: number
}

export type FollowType = {
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

export type AuthMeType = {
    id: number
    email: string
    login: string
}

export type AuthType<T = {}> = {
    data: T
    fieldsErrors: []
    messages: string[]
    resultCode: number

}

export type SuccessfulType = {
    resultCode: number
    messages: string[],
    data: {}
}

export const authAPI = {
    authMe: () => {
        return instance.get<AuthType<AuthMeType>>("auth/me")
            .then(response => response.data)
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<AuthType<{ userId: number }>>("auth/login", {email, password, rememberMe})
            .then(res => res.data)
    },
    logout: () => {
        return instance.delete<AuthType>("auth/login")
            .then(res => res.data)
    }
}


export type PhotoType<T = {}> = {
    data: T
    fieldsErrors: []
    messages: string[]
    resultCode: number

}
export const profileAPI = {
    getProfile: (userId: number) => {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus: (userId: number) => {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    putStatus: (status: string) => {
        return instance.put<SuccessfulType>(`profile/status`, {status})
            .then(response => response.data.resultCode)
    },
    putPhoto: (image: File) => {
        const formData = new FormData()
        formData.append('image', image)
        return instance.put<PhotoType<{ photos: { small: string, large: string } }>>('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => response.data)
    },
    putProfileData: (data: UpdateProfileDataType) => {
        return instance.put<SuccessfulType>('profile', data)
            .then(res => res.data)
    }
}
