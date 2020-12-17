import React from "react";
import {actions} from "../../redux/dialogs-reducer";
import {Dialogs, MapDispatchPropsType, MapStatePropsType} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: AppStateType): MapStatePropsType  => {
    return {
        DialogPage: state.DialogPage,
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {sendMessage: actions.sendMessageActionCreator}),
    withAuthRedirect
    )(Dialogs)