import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {CustomField} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {InitialStateType, thunks} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormPropsType = {
    captchaUrl: string
}
const maxLengthValidate = maxLengthCreator(30)
const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormPropsType> & LoginFormPropsType> = (props) => {
    console.log(props);
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"email"} component={CustomField} validate={[required, maxLengthValidate]} placeholder={'email'} fieldType={"input"}/>
        </div>
        <div>
            <Field name={"password"} component={CustomField} type={"password"} validate={[required, maxLengthValidate]} placeholder={'password'} fieldType={"input"}/>
        </div>
        <div>
            <Field name={"rememberMe"} component={"input"} type="checkbox"/>remember Me
        </div>
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
        {props.captchaUrl && <img src={props.captchaUrl} alt='captcha'/>}
        {props.captchaUrl &&
        <Field name={'captcha'} component={CustomField} fieldType={'input'} placeholder={'enter captcha'}
               validate={[required]}/>}
        <div>
            <button>submit</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormPropsType>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    auth: InitialStateType
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export const Login: React.FC<PropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe, captcha} = formData
        props.login(email, password, rememberMe, captcha)
    };

    return (
        <div>
            {props.auth.isAuth ? <Redirect to={"/Profile"}/> : <div><h1>Авторизация</h1>
                <LoginReduxForm captchaUrl={props.auth.captchaUrl} onSubmit={onSubmit}/></div>}
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {auth: state.auth}
}

const {login} = thunks
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {login})(Login)