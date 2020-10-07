import React from "react";
import {UserItem} from "./UserItem";
import s from "./Users.module.css"
import {InitialStateType} from "../../redux/user-reducer";
import {UserType} from "../../types/entities";

type PropsType = {
    UserPage: InitialStateType
    setCurrentPage: (p: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}

export const Users: React.FC<PropsType> = (
    {
        UserPage,
        unfollow,
        follow,
        setCurrentPage // отправить текущую страницу пагинации
    }
) => {
    const {
        pageSize, // кол-во отображаемых пользовательей на одной странице
        currentPage, // выбранная страница
        users, // массив пользователей
        totalCount // общее кол-во зарегестрированных пользовательей
    } = UserPage

    const page: number = Math.ceil(totalCount / pageSize)
    const pages: Array<number> = []
    for (let i = 1; i <= page; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p) => <span key={p.toString()} onClick={() => setCurrentPage(p)}
                                  className={p === currentPage ? s.paginationSelected : ""}>{p}</span>)}
            {users.map((u: UserType) => <UserItem key={u.id} user={u} unfollow={unfollow} follow={follow}/>)}</div>
    )
}