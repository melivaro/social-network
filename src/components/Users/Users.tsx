import React from "react";
import axios from "axios";
import {UserItem} from "./UserItem";
import {InitialStateType} from "../../redux/user-reducer";
import {UserType} from "../../types/entities";

export type MapStatePropsType = {
    UserPage: InitialStateType
}

export type MapDispatchPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers(users: Array<UserType>): void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export class Users extends React.Component<PropsType> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        alert("Did mount!")
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => this.props.setUsers(response.data.items))

    }

    componentWillUnmount() {
        alert("Will unmount")
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        alert("Update")
    }

    render: any = () => {
        console.log(this.props)
        return (
            <div>{this.props.UserPage.users.map((u: any) => {
                return <UserItem user={u} unfollow={this.props.unfollow} follow={this.props.follow}/>
            })}</div>
        )
    }
}