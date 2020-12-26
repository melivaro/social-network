import {Reducer} from "redux";
import {InferActionTypes} from "../types/entities";
import {AppThunk} from "./redux-store";
import {thunks as thunksAuth} from "./auth-reducer"

type InitialStateType = typeof initialState

type ActionTypes = InferActionTypes<typeof actions>

const initialState = {
    initialized: false
}

export const appReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: "SET_INITIALIZED"} ) as const
}

export const thunks = {
    initializedApp: (): AppThunk => (dispatch) => {
        const promise = dispatch(thunksAuth.authTC())
        Promise.all([promise]).then(() => dispatch(actions.initializedSuccess()))

    }
}