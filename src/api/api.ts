import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'fe73a3ea-2d16-48b8-bac3-a0d380e5c9ca'
    }
})

export const usersAPI = {
    getUsers: (pageSize: number, currentPage: number) => {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    getCurrentPage: (pageSize: number, pageNumber: number) => {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response => response.data)
    },
    postFollow: (id: number) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data)

    },
    deleteUnfollow: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)

    },
}

// export const getUsers = (pageSize: number, currentPage: number) => {
//     return instance.get(`users?count=${pageSize}&page=${currentPage}`)
//         .then(response => response.data)
// }
//
// export const getCurrentPage = (pageSize: number, pageNumber: number) => {
//     return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
//         .then(response => response.data)
// }
//
// export const postFollow = (id: number) => {
//     return instance.post(`follow/${id}`)
//         .then(response => response.data)
//
// }
//
// export const deleteUnfollow = (id: number) => {
//     return instance.delete(`follow/${id}`)
//         .then(response => response.data)
//
// }