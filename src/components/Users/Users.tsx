import React from "react";
import {UserItem} from "./UserItem";
import {UserType} from "../../types/entities";
import {Pagination} from "../common/Pagination/Pagination";

type PropsType = {
    followingInProgress: Array<number>
    pageSize: number
    currentPage: number
    totalCount: number
    users: Array<UserType>
    setCurrentPage: (p: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: React.FC<PropsType> = (
    {
        unfollow,
        follow,
        setCurrentPage, // отправить текущую страницу пагинации
        pageSize, // кол-во отображаемых пользовательей на одной странице
        currentPage, // выбранная страница
        users, // массив пользователей
        totalCount, // общее кол-во зарегестрированных пользовательей
        followingInProgress,
    }
) => {
    return (
        <div>
            <Pagination totalCountItems={totalCount} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} portionSize={10}/>
            {users.map((u: UserType) => <UserItem key={u.id} followingInProgress={followingInProgress} user={u}
                                                  unfollow={unfollow} follow={follow}/>)}</div>
    )
}