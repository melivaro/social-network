import {instance, APIResponseType, ResultCodes, ResultCodesForCaptcha} from "./api";

export type AuthMeType = {
	id: number
	email: string
	login: string
}

export type LoginResType = {
	userId: number
}

export const authAPI = {
	authMe: () => {
		return instance.get<APIResponseType<AuthMeType>>("auth/me")
			.then(response => response.data)
	},
	login: (email: string, password: string, rememberMe: boolean = false, captcha: string = '') => {
		return instance.post<APIResponseType<LoginResType, ResultCodesForCaptcha | ResultCodes>>("auth/login", {email, password, rememberMe, captcha})
			.then(res => res.data)
	},
	logout: () => {
		return instance.delete<APIResponseType>("auth/login")
			.then(res => res.data)
	}
}