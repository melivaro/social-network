import {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogs-reducer";

export type PostType = {
    id: number
    message: string
    likesCounter: number
}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageItemType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    newMessageText: string
}
export type MainStateType = {
    ProfilePage: ProfilePageType
    DialogPage: DialogPageType

}
export type StoreType = {
    _state: MainStateType
    _callSubscriber: (state: MainStateType) => void
    subscribe: (observer: (state: MainStateType) => void) => void
    getState: () => MainStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

// enum actionConst  {
//     ADD_POST= "ADD_POST",
//     UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT",
//     SEND_MESSAGE = "SEND_MESSAGE",
//     UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT",
// }

// export let store: StoreType = {
//     _state: {
//         ProfilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCounter: 10},
//                 {id: 2, message: "It's my first post", likesCounter: 13},
//                 {id: 3, message: "Yo!", likesCounter: 17},
//             ],
//             newPostText: ""
//         },
//         DialogPage: {
//             dialogs: [
//                 {id: 1, name: "Max"},
//                 {id: 2, name: "Sven"},
//                 {id: 3, name: "Jim"},
//                 {id: 4, name: "Victor"},
//             ],
//
//             messages: [
//                 {id: 1, message: "Haudy ho!"},
//                 {id: 2, message: "YO"},
//                 {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, similique?"},
//                 {id: 4, message: "Lorem ipsum dolor sit amet."},
//             ],
//             newMessageText: ""
//         }
//     },
//     _callSubscriber() {
//         console.log("state changed")
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//         this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
//         this._state.DialogPage = dialogsReducer(this._state.DialogPage, action)
//         this._callSubscriber(this._state)
//         // {
//         //     if (action.type === actionConst.ADD_POST) {
//         //         const newPost = {
//         //             id: 5,
//         //             message: this._state.ProfilePage.newPostText,
//         //             likesCounter: 0
//         //         }
//         //         this._state.ProfilePage.posts.push(newPost);
//         //         this._state.ProfilePage.newPostText = '';
//         //         this._callSubscriber(this._state);
//         //     } else if (action.type === actionConst.UPDATE_NEW_POST_TEXT) {
//         //         this._state.ProfilePage.newPostText = action.newText
//         //         this._callSubscriber(this._state);
//         //     } else if (action.type === actionConst.SEND_MESSAGE) {
//         //         const newMessage = {
//         //             id: 5,
//         //             message: this._state.DialogPage.newMessageText,
//         //         }
//         //         this._state.DialogPage.messages.push(newMessage)
//         //         this._state.DialogPage.newMessageText = "";
//         //         this._callSubscriber(this._state)
//         //     } else if (action.type === actionConst.UPDATE_NEW_MESSAGE_TEXT) {
//         //         this._state.DialogPage.newMessageText = action.newMessageText
//         //         this._callSubscriber(this._state);
//         //     }
//         // }
//     },
//
// }

// export const addPostActionCreator = () => {
//     return {
//         type: actionConst.ADD_POST,
//     } as const
// }
//
// export const updateNewPostTextActionCreator = (text: string) => {
//     return  {
//         type: actionConst.UPDATE_NEW_POST_TEXT,
//         newText: text,
//     } as const
// }

// export const sendMessageActionCreator = () => {
//     return {
//         type: actionConst.SEND_MESSAGE,
//     } as const
// }
//
// export const updateNewMessageTextActionCreator = (text: string) => {
//     return {
//         type: actionConst.UPDATE_NEW_MESSAGE_TEXT,
//         newMessageText: text,
//     } as const
// }