import {Reducer} from "redux";
import {InferActionTypes, DialogType, MessageType} from "../types/entities";

export type InitialStateType = typeof initialState

const initialState = {
    dialogs: [
        {id: 1, name: "Max"},
        {id: 2, name: "Sven"},
        {id: 3, name: "Jim"},
        {id: 4, name: "Victor"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Haudy ho!"},
        {id: 2, message: "YO"},
        {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, similique?"},
        {id: 4, message: "Lorem ipsum dolor sit amet."},
    ] as Array<MessageType>,
    newMessageText: ""
}

export const dialogsReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case "SEND_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: state.newMessageText,
                }],
                newMessageText: "",
            }
        case "UPDATE_NEW_MESSAGE_TEXT":
            return {
                ...state,
                newMessageText: action.newMessageText,
            }
        default:
            return state
    }
};

export type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    sendMessageActionCreator: ()=>({type: "SEND_MESSAGE"}) as const,
    updateNewMessageTextActionCreator: (text: string)=>({type: "UPDATE_NEW_MESSAGE_TEXT", newMessageText: text}) as const,
}
