import React, {useCallback} from 'react';
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm, SubmissionError, WrappedFieldProps} from 'redux-form'

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
	fullName: string
	aboutMe: string
	lookingForAJobDescription: string
	contacts?: ContactsPropsType
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

		let error: ErrorType = {
			lookingForAJobDescription: '',
			aboutMe: '',
			fullName: '',
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
			(Object.keys(field) as Array<keyof typeof field>).forEach(key => {
				if ((field[key] === null || String(field[key]).trim() === '') && key !== 'contacts') {
					error[key] = 'Required'
					isError = true
				}
			})
		}
		requiredFieldValidator({fullName, aboutMe, lookingForAJobDescription})

		const urlValidator = (contacts: ContactsPropsType) => {
			(Object.keys(contacts) as Array<keyof typeof contacts>).forEach(key => {
				const urlRegExpValidator = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?.#-]+\.?)+(\/[^\s]*)?$/i
				if (contacts[key]?.trim() && !urlRegExpValidator.test(`${contacts[key]}`) && error.contacts) {
					error.contacts[key] = 'Invalid url format'
					isError = true
				}
			})
		}
		urlValidator(contacts)

		if (isError) {
			throw new SubmissionError<ErrorType, ContactsPropsType | string>(error)
		} else {
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
