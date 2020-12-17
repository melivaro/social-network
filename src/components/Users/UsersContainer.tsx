import React from "react";
import {connect} from "react-redux";
import {thunks} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Loader} from "../common/Loader/Loader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/users-selectors";

export type MapStatePropsType = ReturnType<typeof mapStateToProps>

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
        this.props.getUsersTC(this.props.pageSize, this.props.currentPage)

    }

    setCurrentPage = (pageNumber: number) => {
        this.props.getCurrentPageTC(this.props.pageSize, pageNumber)
    }

    setFollow = (userId: number) => {
        this.props.followTC(userId)
    }

    setUnfollow = (userId: number) => {
        this.props.unfollowTC(userId)
    }


    render() {
        console.log('user container')
        if (this.props.isFetching) return <Loader/>
        return <Users
            follow={this.setFollow}
            unfollow={this.setUnfollow}
            setCurrentPage={this.setCurrentPage}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            totalCount={this.props.totalCount}
            followingInProgress={this.props.followingInProgress}
        />

    }
}


const {getUsersTC, getCurrentPageTC, followTC, unfollowTC} = thunks

let mapStateToProps = (state: AppStateType) => ({
    isFetching: getIsFetching(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    users: getUsers(state),
    totalCount: getTotalCount(state),
    followingInProgress: getFollowingInProgress(state)
})

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        getUsersTC,
        getCurrentPageTC,
        followTC,
        unfollowTC,
    })
    )(UsersComponent);

