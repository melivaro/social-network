import React from "react";
import {actions} from "../../redux/dialogs-reducer";
import {Dialogs, MapDispatchPropsType, MapStatePropsType} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType): MapStatePropsType  => {
    return {
        DialogPage: state.DialogPage
    }
}

export const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {changeMessageText: actions.updateNewMessageTextActionCreator, sendMessage: actions.sendMessageActionCreator})(Dialogs);