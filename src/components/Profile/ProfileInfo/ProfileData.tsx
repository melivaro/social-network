import React from 'react';
import {UpdateProfileDataType} from "./ProfileDataForm";

type PropsType = {
	profile: UpdateProfileDataType
	setEditMode: (val: boolean) => void
};

export const ProfileData: React.FC<PropsType> = ({setEditMode ,profile: {lookingForAJob, contacts, lookingForAJobDescription, fullName, aboutMe}}) => {
	return (
		<>
			<p><span>Name: </span>{fullName}</p>
			<p><span>About me: </span>{aboutMe}</p>
			{lookingForAJob ? <p>looking for a job</p> : <p>not looking for a job</p>}
			<p><span>Professional skills: </span>{lookingForAJobDescription}</p>
			<p>Contacts:</p>
			<ul>
				{Object.keys(contacts).map(key => (
					<li key={key}><span>{`${key}: `}</span><a href={contacts[key]}>{contacts[key]}</a></li>
				))}
			</ul>
			<button onClick={()=> setEditMode(true)}>edit</button>
		</>
	);
};