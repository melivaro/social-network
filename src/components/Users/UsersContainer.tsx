import React from "react";
import {connect} from "react-redux";
import {InitialStateType, thunks} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Loader} from "../common/Loader/Loader";
import {compose} from "redux";

export type MapStatePropsType = {
    UserPage: InitialStateType
}

export type MapDispatchPropsType = {
    getUsersTC: (pageSize: number, currentPage: number) => void
    getCurrentPageTC: (pageSize: number, pageNumber: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export class UsersComponent extends React.Component<PropsType> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersTC(this.props.UserPage.pageSize, this.props.UserPage.currentPage)

    }

    setCurrentPage = (pageNumber: number) => {
        this.props.getCurrentPageTC(this.props.UserPage.pageSize, pageNumber)
    }

    setFollow = (userId: number) => {
        this.props.followTC(userId)
    }

    setUnfollow = (userId: number) => {
        this.props.unfollowTC(userId)
    }


    render() {
        if (this.props.UserPage.isFetching) return <Loader/>
        return <Users
            follow={this.setFollow}
            unfollow={this.setUnfollow}
            UserPage={this.props.UserPage}
            setCurrentPage={this.setCurrentPage}
        />

    }
}


const {getUsersTC, getCurrentPageTC, followTC, unfollowTC} = thunks

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    UserPage: state.UserPage
})

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        getUsersTC,
        getCurrentPageTC,
        followTC,
        unfollowTC,
    })
    )(UsersComponent);

