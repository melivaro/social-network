
export type InferActionTypes<T> = T extends {[key: string]:(...args: any[])=>infer U}? U : never

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


// import { initialState as DialogsPage } from "../redux/dialogs-reducer"
// import { initialState as ProfilePage } from "../redux/profile-reducer"
// import {initialState as UsersPage} from "../redux/user-reducer";

// export type PageType<T> =
//     T extends "Dialog" ? typeof DialogsPage.dialogs[0]
//     : T extends "Message" ? typeof DialogsPage.messages[0]
//         : T extends "Posts" ? typeof ProfilePage.posts[0]
//             : T extends "User" ? typeof UsersPage.users[0]
//                 : never
