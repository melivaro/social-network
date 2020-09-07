import {ActionsTypes, DialogPageType} from "./store";


enum actionConst {
    SEND_MESSAGE = "SEND_MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT",
}

const {SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} = actionConst

let dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = "";
            // this._callSubscriber(this._state)
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            // this._callSubscriber(this._state);
            return state
        default:
            return state
    }
};


export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}

export const updateNewMessageTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    } as const
}

export default dialogsReducer;