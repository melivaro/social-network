import {actions, dialogsReducer, InitialStateType} from "../redux/dialogs-reducer";
import {DialogType, MessageType} from "../types/entities";

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
    }

    const action = actions.sendMessageActionCreator("juicy")

    const finalState = dialogsReducer(startState, action)

    expect(finalState.messages.length).toBe(5)
    expect(finalState.messages[4].message).toBe("juicy")
    expect(finalState.messages[4].id).toBe(6)
})