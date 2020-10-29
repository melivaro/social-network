import {Reducer} from "redux";
import {DialogType, InferActionTypes, MessageType} from "../types/entities";

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
}

export const dialogsReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case "SEND_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: action.message,
                }],
            }
        default:
            return state
    }
};

export type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    sendMessageActionCreator: (message: string)=>({type: "SEND_MESSAGE", message}) as const,
}
