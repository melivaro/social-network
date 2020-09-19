import {Reducer} from "redux";

enum actionConst {
    SEND_MESSAGE = "SEND_MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT",
}

const {SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} = actionConst

export type DialogsInitialStateType = typeof initialState

const initialState = {
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
    ],
    newMessageText: ""
}

type SendMessageACType = {
    type: typeof SEND_MESSAGE
}

type UpdateNewMessageTextACType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newMessageText: string
}

export type DialogsActionType =
    ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

export const dialogsReducer: Reducer<DialogsInitialStateType, DialogsActionType> = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: state.newMessageText,
                }],
                newMessageText: "",
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText,
            }
        default:
            return state
    }
};

export const sendMessageActionCreator = (): SendMessageACType => {
    return {
        type: SEND_MESSAGE,
    } as const
}

export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextACType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    } as const
}