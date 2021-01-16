import {APIResponseType, instance} from "./api";
import {UserType} from "../types/entities";

export type UsersDataResponseType = {
	error: null | string
	items: Array<UserType>
	totalCount: number
}

export const usersAPI = {
	getUsers: (pageSize: number, currentPage: number) => {
		return instance.get<UsersDataResponseType>(`users?count=${pageSize}&page=${currentPage}`)
			.then(response => response.data)
	},
	getCurrentPage: (pageSize: number, pageNumber: number) => {
		return instance.get<UsersDataResponseType>(`users?count=${pageSize}&page=${pageNumber}`)
			.then(response => response.data)
	},
	postFollow: (id: number) => {
		return instance.post<APIResponseType>(`follow/${id}`)
			.then(response => response.data)

	},
	deleteUnfollow: (id: number) => {
		return instance.delete<APIResponseType>(`follow/${id}`)
			.then(response => response.data)

	},
}