import {ProfileType} from "../types/entities";
import {UpdateProfileDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";
import {APIResponseType, instance} from "./api";

export type PhotoType = {
	photos: {
		small: string, large: string
	}
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
		return instance.put<APIResponseType>(`profile/status`, {status})
			.then(response => response.data.resultCode)
	},
	putPhoto: (image: File) => {
		const formData = new FormData()
		formData.append('image', image)
		return instance.put<APIResponseType<PhotoType>>('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
			.then(response => response.data)
	},
	putProfileData: (data: UpdateProfileDataType) => {
		return instance.put<APIResponseType>('profile', data)
			.then(res => res.data)
	}
}