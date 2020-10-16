import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, thunks} from "../../redux/auth-reducer";


export type MapStatePropsType = {
    auth: InitialStateType
}

type MapDispatchPropsType = {
    authTC: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerApi extends React.Component<PropsType> {

    componentDidMount() {
        this.props.authTC()
    }

    render() {
        return <Header auth={this.props.auth}/>
    }
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        auth: state.auth
    }
}

const {authTC} = thunks

export const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {authTC})(HeaderContainerApi)