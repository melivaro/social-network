import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {thunks} from "../../redux/profile-reducer";
import {ProfileType} from "../../types/entities";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

export class ProfileComponent extends React.Component<PropsType> {

    constructor(props: PropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.profileTC(Number(this.props.match.params.userId), this.props.authorizedUserId, this.props.history)
        this.props.statusTC(Number(this.props.match.params.userId), this.props.authorizedUserId)
    }

    render() {

        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}


export type MapStatePropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
}

export type MapDispatchPropsType = {
    profileTC: (userId: number, authorizedUserId: number | null, historyPorops: any) => void
    statusTC: (userId: number, authorizedUserId: number | null) => void
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({profile: state.ProfilePage.profile, status: state.ProfilePage.status, authorizedUserId: state.auth.id})

const {profileTC, statusTC, updateStatus} = thunks

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {profileTC, statusTC, updateStatus}),
    withRouter,
)(ProfileComponent)

