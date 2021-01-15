import {actions, authReducer} from "../redux/auth-reducer";

test('set user data should be isAuth truthy', ()=>{
    const initialAuthUserData = {
        id: null,
        login: null,
        email: null,
        isAuth: false,
        captchaUrl: ''
    }

    const authUserData = {
        id: 89121,
        login: 'feel',
        email: 'feel@gmail.com',
        isAuth: true,
        captchaUrl: '',
    }
    const action=actions.setAuthUserData(authUserData)
    const finalState = authReducer(initialAuthUserData, action)

    expect(finalState.isAuth).toBeTruthy()
})