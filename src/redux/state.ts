export type PostType = {
    id: number,
    message: string,
    likesCounter: number,
}

export type DialogItemType = {
    id: number,
    name: string,
}

export type MessageItemType = {
    id: number,
    message: string,
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogItemType>,
    messages: Array<MessageItemType>
}

export type MainStateType = {
    ProfilePage: ProfilePageType,
    DialogPage: DialogPageType
}

export type SuperMegaStateType = {
    state: MainStateType
}

export let state = {

    ProfilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCounter: 10},
            {id: 2, message: "It's my first post", likesCounter: 13},
            {id: 3, message: "Yo!", likesCounter: 17},
        ]
    },

    DialogPage: {
        dialogs: [
            {id: 1, name: "Max"},
            {id: 2, name: "Sven"},
            {id: 3, name: "Jim"},
            {id: 4, name: "Victor"},
        ],

        messages: [
            {id: 1, message: "Haudy ho!"},
            {id: 2, message: "YO"},
            {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, similique?"},
            {id: 4, message: "Lorem ipsum dolor sit amet."},
        ]
    }
}