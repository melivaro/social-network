import {applyMiddleware, combineReducers, createStore, Action} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware, {ThunkAction} from "redux-thunk"

let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    UserPage: userReducer,
    auth: authReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, Action<string>>

// @ts-ignore
window.store = store

export default store
