
// export type InferActionTypes<T> = T extends {[key: string]:(...args: any[])=>infer U}? U : never

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionTypes<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesType<T>>

export type ProfileType = {
    aboutMe: string
    contacts: {
        // [index: string]: string
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCounter: number
}

export type UserType = {
    id: number
    name: string
    uniqueUrlName: string
    photos: {small: string, large: string}
    followed: boolean
    status: string
    // location: {
    //     country: string
    //     city: string
    // }
}

