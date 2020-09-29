import React from "react";
import axios from "axios";
import {UserItem} from "./UserItem";
import {InitialStateType} from "../../redux/user-reducer";
import {UserType} from "../../types/entities";
import s from "./Users.module.css"

export type MapStatePropsType = {
    UserPage: InitialStateType
}

export type MapDispatchPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setCurrentPage: (p: number) => void
    setUsers(users: Array<UserType>): void
    setTotalCount(usersCount: number): void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export class Users extends React.Component<PropsType> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.UserPage.pageSize}&page=${this.props.UserPage.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                })


    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    }


    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.UserPage.pageSize}&page=${pageNumber}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render: any = () => {
    const page: number = Math.ceil(this.props.UserPage.totalCount / this.props.UserPage.pageSize)
        const pages: Array<number> = []
        for (let i = 1; i <= page; i++){
            pages.push(i)
        }

        return (
            <div>
                {pages.map(p=><span onClick={()=>this.setCurrentPage(p)} className={p === this.props.UserPage.currentPage ? s.paginationSelected : ""}>{p}</span>)}
                {this.props.UserPage.users.map((u: any) => {
                return <UserItem user={u} unfollow={this.props.unfollow} follow={this.props.follow}/>
            })}</div>
        )
    }



}