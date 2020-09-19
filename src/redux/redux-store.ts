import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { userReducer } from "./user-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    UserPage: userReducer,
})

export type AppStoreType = ReturnType<typeof reducers>

let store = createStore(reducers)

// @ts-ignore
window.store = store

export default store
