import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {thunks} from "../../redux/profile-reducer";
import {ProfileType} from "../../types/entities";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

export class ProfileAPIComponent extends React.Component<PropsType> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.profileTC(this.props.match.params.userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}


export type MapStatePropsType = {
    profile: ProfileType
}

export type MapDispatchPropsType = {
    profileTC: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({profile: state.ProfilePage.profile})

const {profileTC} = thunks

export const ProfileContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {profileTC})(withRouter(ProfileAPIComponent))