import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, thunks} from "../../redux/auth-reducer";


export type MapStatePropsType = {
    auth: InitialStateType
}

export type MapDispatchPropsType = {
    authTC: () => void
    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerApi extends React.Component<PropsType> {

    render() {
        return <Header logout={this.props.logout} authTC={this.props.authTC} auth={this.props.auth}/>
    }
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        auth: state.auth
    }
}

const {authTC, logout} = thunks

export const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {
    authTC,
    logout
})(HeaderContainerApi)