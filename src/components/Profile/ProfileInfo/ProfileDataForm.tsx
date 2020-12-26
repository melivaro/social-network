import React, {useCallback} from 'react';
import {
	Field,
	FormErrors,
	FormSubmitHandler,
	InjectedFormProps,
	reduxForm,
	SubmissionError,
	WrappedFieldProps
} from 'redux-form'

type PropsType = {
	contacts: ContactsPropsType
	setEditMode: (val: boolean) => void
	updateProfileData: (data: UpdateProfileDataType) => void
}
export type UpdateProfileDataType = {
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	aboutMe: string
	contacts: ContactsPropsType
}

export type ContactsPropsType = {
	[index: string]: string
	facebook: string
	github: string
	instagram: string
	mainLink: string
	twitter: string
	vk: string
	website: string
	youtube: string
}

type ErrorType = {
	[index: string]: string
	fullName: string
	aboutMe: string
	lookingForAJobDescription: string
}


let ProfileDataForm: React.FC<InjectedFormProps<UpdateProfileDataType, PropsType> & PropsType> = ({handleSubmit, contacts, setEditMode, updateProfileData}) => {

	const submit: FormSubmitHandler<UpdateProfileDataType> = (
		{
			fullName,
			lookingForAJob,
			lookingForAJobDescription,
			aboutMe,
			contacts
		}) => {

		{/*TODO typing fo error any */}
		let error: FormErrors<ErrorType, ContactsPropsType | string | any> = {
			contacts: {
				facebook: '',
				github: '',
				instagram: '',
				mainLink: '',
				twitter: '',
				vk: '',
				website: '',
				youtube: '',
			}
		}
		let isError = false

		const requiredFieldValidator = (field: ErrorType) => {
			let keys = Object.keys(field)

			for (let i = 0; i < keys.length; i++) {
				if (field[keys[i]] === null || String(field[keys[i]]).trim() === '') {
					error[keys[i]] = 'Required'
					isError = true
				}
			}
		}

		requiredFieldValidator({fullName, aboutMe, lookingForAJobDescription})

		const urlValidator = (cn: ContactsPropsType) => {
			let keys = Object.keys(cn)
			const urlRegExpValidator = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i
			for (let i = 0; i < keys.length; i++) {
				if (cn[keys[i]]?.trim() && !urlRegExpValidator.test(`${cn[keys[i]]}`)) {
					error.contacts[keys[i]] = 'Invalid url format'
					isError = true
				}
			}
		}
		urlValidator(contacts)

		if (isError) {
			throw new SubmissionError<ErrorType, ContactsPropsType | string>(error)
		} else {
			// submit form to server
			updateProfileData({
				fullName,
				lookingForAJob,
				lookingForAJobDescription,
				aboutMe,
				contacts,
			})
			setEditMode(false)
		}
	}

	const renderField = useCallback(({fieldModel, type, input, label, meta: {error, touched}}: WrappedFieldProps & { label: string, type: string, fieldModel: string }) => {
		return <div className="input-row">
			<label>{label}</label>
			<br/>
			{React.createElement(fieldModel, {...input, type},)}
			{touched && error && <span className="error">{error}</span>}
		</div>
	}, [])


	return (
		<form onSubmit={handleSubmit(submit)}>
			<div>
				<Field name="fullName" label='fullName' component={renderField} type="text" fieldModel="input"/>
			</div>
			<div>
				<Field name="lookingForAJob" label='lookingForAJob' component={renderField} type="checkbox"
					   fieldModel="input"/>
			</div>
			<div>
				<Field name="lookingForAJobDescription" label="lookingForAJobDescription" component={renderField}
					   fieldModel={"textarea"}/>
			</div>
			<div>
				<Field name="aboutMe" label="aboutMe" component={renderField} fieldModel="textarea"/>
			</div>
			{(Object.keys(contacts)).map(key => (
				<div key={key}>
					<Field name={`contacts.${key}`} label={key} component={renderField} type="text"
						   fieldModel="input"/>
				</div>))}
			<button type="submit">Submit</button>
		</form>
	)
}

export const ProfileReduxForm = reduxForm<UpdateProfileDataType, PropsType>({
	form: 'profile'
})(ProfileDataForm)
