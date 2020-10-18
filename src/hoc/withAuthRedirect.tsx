import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MSTPForRedirectType = {
    isAuth: boolean
}

const mapSTPForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = <ComponentStateProps extends {}>(Component: ComponentType<ComponentStateProps>) => {

    const WrapperContainer: React.FC<MSTPForRedirectType> = (props) => {
        const {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as ComponentStateProps}/>
    }

    return connect<MSTPForRedirectType, {}, ComponentStateProps, AppStateType>(mapSTPForRedirect)(WrapperContainer)
}
