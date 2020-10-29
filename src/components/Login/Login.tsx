import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    console.log(props);
    return <form onSubmit={props.handleSubmit}>
        <div><Field name={"login"} component={"input"} placeholder={'login'}/></div>
        <div><Field name={"password"} component={"input"} placeholder={'password'}/></div>
        <div><Field name={"rememberMe"} component={"input"} type="checkbox"/>remember Me</div>
        <div>
            <button>submit</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const onSubmit = (formData: FormDataType) => {
    console.log(formData);
};

export const Login = () => {
    return (
        <div>
            <h1>Авторизация</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}