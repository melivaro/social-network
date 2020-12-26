import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {thunks} from "../../redux/profile-reducer";
import {ProfileType} from "../../types/entities";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {Loader} from "../common/Loader/Loader";
import {UpdateProfileDataType} from "./ProfileInfo/ProfileDataForm";

type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

export class ProfileComponent extends React.Component<PropsType> {

    constructor(props: PropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.profileTC(+this.props.match.params.userId, this.props.authorizedUserId, this.props.history)
        this.props.statusTC(+this.props.match.params.userId, this.props.authorizedUserId)
    }

    componentDidUpdate(prevProps: PropsType) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.profileTC(+this.props.match.params.userId, this.props.authorizedUserId, this.props.history)
        }
    }


    render() {
        if (this.props.isSuccessStatus && Object.keys(this.props.profile).length !== 0) {
            return <Profile updateProfileData={this.props.updateProfileData} updatePhoto={this.props.updatePhoto} isOwner={!this.props.match.params.userId} profile={this.props.profile} statusObj={this.props.statusObj}
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
    profileTC: (userId: number, authorizedUserId: number | null, historyProps: any) => void
    statusTC: (userId: number, authorizedUserId: number | null) => void
    updateStatus: (status: string) => void
    updatePhoto: (image: File) => void
    updateProfileData: (data: UpdateProfileDataType) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.ProfilePage.profile,
        statusObj: state.ProfilePage.statusObj,
        isSuccessStatus: state.ProfilePage.isSuccessStatus,
        authorizedUserId: state.auth.id
}
}
const {profileTC, statusTC, updateStatus, updatePhoto, updateProfileData} = thunks

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {updateProfileData ,profileTC, statusTC, updateStatus, updatePhoto}),
    withRouter,
)(ProfileComponent)

