import React from "react";
import {connect} from "react-redux";
import {actions, InitialStateType} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UserType} from "../../types/entities";
import {Users} from "./Users";
import {Loader} from "../common/Loader/Loader";
import {usersAPI} from "../../api/api";

export type MapStatePropsType = {
    UserPage: InitialStateType
}

export type MapDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCurrentPage: (p: number) => void
    setUsers(users: Array<UserType>): void
    setTotalCount(usersCount: number): void
    setLoader: (isFetching: boolean) => void
    setDisabled: (isFetching: boolean, userId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const {postFollow, deleteUnfollow, getCurrentPage, getUsers} = usersAPI

export class UsersAPIComponent extends React.Component<PropsType> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.setLoader(true)
        getUsers(this.props.UserPage.pageSize, this.props.UserPage.currentPage)
            .then(data => {
                this.props.setLoader(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })


    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setLoader(true)
        this.props.setCurrentPage(pageNumber)
        getCurrentPage(this.props.UserPage.pageSize, pageNumber)
            .then(data => {
                this.props.setLoader(false)
                this.props.setUsers(data.items)
            })
    }

    setFollow = (id: number) => {
        this.props.setDisabled(true, id)
        postFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(id)
                    this.props.setDisabled(false, id)
                }
            })
    }

    setUnfollow = (id: number) => {
        this.props.setDisabled(true, id)
        deleteUnfollow(id)
            .then(data => {
                data.resultCode === 0 && this.props.unfollow(id)
                this.props.setDisabled(false, id)
            })
    }


    render() {
        return <>
            {this.props.UserPage.isFetching ? <Loader/> : <Users
                follow={this.setFollow}
                unfollow={this.setUnfollow}
                UserPage={this.props.UserPage}
                setCurrentPage={this.setCurrentPage}
            />
            }
        </>
    }
}

const {setCurrentPage, setTotalCount, follow, setUsers, unfollow, setLoader, setDisabled} = actions

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({UserPage: state.UserPage})

export const UserContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setLoader,
    setDisabled,
})(UsersAPIComponent);

