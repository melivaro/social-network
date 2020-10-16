import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    UserPage: userReducer,
    auth: authReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))

// @ts-ignore
window.store = store

export default store
