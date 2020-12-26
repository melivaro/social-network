import React from 'react';

type PropsType = {};
type StateType = {
	hasError: boolean
}

export class ErrorBoundary extends React.Component<PropsType, StateType> {

	constructor(props: PropsType) {
		super(props);
		this.state = {hasError: false}
	}

	static getDerivedStateFromError(error: Error) {
		return {hasError: true}
	}


	render() {
		if (this.state.hasError) {
			return <h1>'что-то пошло не так!'</h1>
		}

		return this.props.children
	}

}