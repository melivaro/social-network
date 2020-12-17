import React, {useMemo} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {CustomField} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type PropsType = MapStatePropsType & MapDispatchPropsType

export type MapDispatchPropsType = {
    sendMessage: (message: string) => void
}

export type MapStatePropsType = {
    DialogPage: InitialStateType
}

export const Dialogs = ({DialogPage, sendMessage}: PropsType) => {

    let dialogItems = DialogPage.dialogs.map((d) => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })
    let messageItems = DialogPage.messages.map((m) => {
        return  <MessageItem key={m.id} message={m.message} id={m.id}/>
    })

    const addNewMessage = (formData: FormDataType) => {
        sendMessage(formData.message)
    };
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                {dialogItems}
            </ul>
            <ul className={s.messagesList}>
                {messageItems}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </ul>
        </div>
    )
}

export type FormDataType = {
    message: string
}
    const maxLengthValidate = maxLengthCreator(30);

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={'message'}
                component={CustomField}
                placeholder="Enter your message"
                fieldType={'textarea'}
                validate={[required, maxLengthValidate]}
            />
        </div>
        <div>
            <button>send message</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'message'
})(AddMessageForm)