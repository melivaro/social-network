import React from "react";
import {StoreType,} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: StoreType
}

export function DialogsContainer(props: PropsType) {

    let state = props.store.getState().DialogPage;

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    const changeMessageText = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Dialogs DialogPage={state} changeMessageText={changeMessageText} sendMessage={sendMessage}/>
}