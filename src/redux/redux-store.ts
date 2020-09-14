import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    UserPage: userReducer,
})

let store = createStore(reducers)

// @ts-ignore
window.store = store

export default store
