import React, {Dispatch} from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, DialogPageType, MainStateType} from "../../redux/store";

// type PropsType = {
//     store: StoreType
// }

// export function DialogsContainer() {
//
//
//
//     return (
//         <StoreContext.Consumer>
//             { store => {
//                 //@ts-ignore
//                 let state = store.getState().DialogPage;
//
//                 const sendMessage = () => {
//                     //@ts-ignore
//                     store.dispatch(sendMessageActionCreator())
//                 }
//
//                 const changeMessageText = (text: string) => {
//                     //@ts-ignore
//                     store.dispatch(updateNewMessageTextActionCreator(text))
//                 }
//                return <Dialogs DialogPage={state} changeMessageText={changeMessageText} sendMessage={sendMessage}/>
//             }
//             }
//         </StoreContext.Consumer>
//         )
// }

type MapDispatchToPropsType = (dispatch: Dispatch<ActionsTypes>) => {
    changeMessageText: (text: string) => void
    sendMessage: () => void
}

type MapStateToPropsType = (state: MainStateType) => {
    DialogPage: DialogPageType
}

let mapStateToProps: MapStateToPropsType = (state) => {
    return {
        DialogPage: state.DialogPage
    }
}

let mapDispatchToProps: MapDispatchToPropsType = (dispatch) => {
    return {
        changeMessageText: (text: string) => dispatch(updateNewMessageTextActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);