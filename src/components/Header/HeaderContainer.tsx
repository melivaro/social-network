import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios"
import {actions, DataType, InitialStateType} from "../../redux/auth-reducer";


export type MapStatePropsType = {
    auth: InitialStateType
}

type MapDispatchPropsType = {
    setAuthUserData: (data: DataType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerApi extends React.Component<PropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
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