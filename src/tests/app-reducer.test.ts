import {actions, appReducer} from "../redux/app-reducer";

test('initialized should be success', ()=>{
    const startState = {
        initialized: false
    }

    const action = actions.initializedSuccess()
    const finalState = appReducer(startState,action)

    expect(finalState.initialized).toBeTruthy()
})