import React, {Dispatch} from "react";
import {
    DialogsActionType,
    DialogsInitialStateType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";

type MapDispatchType = {
    changeMessageText: (text: string) => void
    sendMessage: () => void
}

type MapStateType = {
    DialogPage: DialogsInitialStateType
}

let mapStateToProps = (state: AppStoreType): MapStateType  => {
    return {
        DialogPage: state.DialogPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<DialogsActionType>): MapDispatchType => {
    return {
        changeMessageText: (text: string) => dispatch(updateNewMessageTextActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);