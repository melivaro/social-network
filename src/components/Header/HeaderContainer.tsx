import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions, DataType, InitialStateType} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


export type MapStatePropsType = {
    auth: InitialStateType
}

type MapDispatchPropsType = {
    setAuthUserData: (data: DataType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerApi extends React.Component<PropsType> {

    componentDidMount() {
        authAPI.authMe()
            .then(data => data.resultCode === 0 && this.props.setAuthUserData(data.data))
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

const {setAuthUserData} = actions

export const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {setAuthUserData})(HeaderContainerApi)