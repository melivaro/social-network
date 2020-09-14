import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
})

let store = createStore(reducers)

// @ts-ignore
window.store = store

export default store
