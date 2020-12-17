import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {thunks} from "../../redux/profile-reducer";
import {ProfileType} from "../../types/entities";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {Loader} from "../common/Loader/Loader";

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
        if (this.props.isSuccessStatus && Object.keys(this.props.profile).length !== 0) {
            return <Profile profile={this.props.profile} statusObj={this.props.statusObj}
                            updateStatus={this.props.updateStatus}/>
        } else {
            return <Loader/>
        }
    }
}


export type MapStatePropsType = {
    profile: ProfileType
    statusObj: {status: string}
    isSuccessStatus: boolean
    authorizedUserId: number | null
}

export type MapDispatchPropsType = {
    profileTC: (userId: number, authorizedUserId: number | null, historyPorops: any) => void
    statusTC: (userId: number, authorizedUserId: number | null) => void
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.ProfilePage.profile,
        statusObj: state.ProfilePage.statusObj,
        isSuccessStatus: state.ProfilePage.isSuccessStatus,
        authorizedUserId: state.auth.id
}
}

const {profileTC, statusTC, updateStatus} = thunks

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {profileTC, statusTC, updateStatus}),
    withRouter,
)(ProfileComponent)

