import axios from "axios"

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'fe73a3ea-2d16-48b8-bac3-a0d380e5c9ca'
    }
})


export enum ResultCodes {
    Success = 0,
    Error = 1,
}

export enum ResultCodesForCaptcha {
    CaptchaRequired = 10,
}

export type APIResponseType<T = {}, RC = ResultCodes> = {
    data: T
    fieldsErrors: []
    messages: string[]
    resultCode: RC

}