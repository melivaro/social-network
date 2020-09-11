import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

// type PropsType = {
//     store: StoreType
// }

export function DialogsContainer() {



    return (
        <StoreContext.Consumer>
            { store => {
                //@ts-ignore
                let state = store.getState().DialogPage;

                const sendMessage = () => {
                    //@ts-ignore
                    store.dispatch(sendMessageActionCreator())
                }

                const changeMessageText = (text: string) => {
                    //@ts-ignore
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
               return <Dialogs DialogPage={state} changeMessageText={changeMessageText} sendMessage={sendMessage}/>
            }
            }
        </StoreContext.Consumer>
        )
}