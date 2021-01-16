import {applyMiddleware, combineReducers, createStore, Action} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import {appReducer} from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    UserPage: userReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, Action<string>>

// @ts-ignore
window.__store__ = store

export default store
