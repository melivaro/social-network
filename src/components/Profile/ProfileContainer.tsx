import React from "react";
import {Profile} from "./Profile";
import axios from 'axios'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/profile-reducer";
import {ProfileType} from "../../types/entities";
import { withRouter, RouteComponentProps } from "react-router-dom";

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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
                console.log(response)
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