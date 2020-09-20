import {actions, dialogsReducer, InitialStateType} from "./dialogs-reducer";
import {DialogType, MessageType} from "../types/entities";

test("newMessageText should be correct string", ()=>{

    const startState: InitialStateType = {
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
        newMessageText: "",
    }

    const action = actions.updateNewMessageTextActionCreator("value")

    const finalState = dialogsReducer(startState, action)

    expect(finalState.newMessageText.length).toBe(5)
    expect(finalState.newMessageText).toBe("value")

})

test("messages should be new length array", ()=>{

    const startState: InitialStateType = {
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
        newMessageText: "juicy",
    }

    const action = actions.sendMessageActionCreator()

    const finalState = dialogsReducer(startState, action)

    expect(finalState.messages.length).toBe(5)
    expect(finalState.messages[4].message).toBe("juicy")
})