import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/profile-reducer";
import {ProfileType} from "../../types/entities";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

export class ProfileAPIComponent extends React.Component<PropsType> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId
        !userId && (userId = "2")
        profileAPI.getProfile(Number(userId))
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}


export type MapStatePropsType = {
    profile: ProfileType
}

export type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({profile: state.ProfilePage.profile})

const {setUserProfile} = actions


export const ProfileContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(withRouter(ProfileAPIComponent))