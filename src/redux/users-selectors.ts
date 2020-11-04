import {AppStateType} from "./redux-store";

// кол-во отображаемых пользовательей на одной странице
export const getPageSize = (state: AppStateType) => {
    return state.UserPage.pageSize
}

// выбранная страница
export const getCurrentPage = (state: AppStateType) => {
    return state.UserPage.currentPage
}

// массив пользователей
export const getUsers = (state: AppStateType) => {
    return state.UserPage.users
}

// общее кол-во зарегестрированных пользовательей
export const getTotalCount = (state: AppStateType) => {
    return state.UserPage.totalCount
}

// активация предзагрузки
export const getIsFetching = (state: AppStateType) => {
    return state.UserPage.isFetching
}

// массив id пользователей находящихся в процессе disable
export const getFollowingInProgress = (state: AppStateType) => {
    return state.UserPage.followingInProgress
}

// export const getSuperUsers = createSelector([getUsers, getIsFetching],(users,isFetching)=>{
//     switch (isFetching){
//         case true:
//             return users.find(t=> t.id === 5)
//         case false:
//             return users.find(t=> t.id === 3)
//         default:
//             return users
//     }
// })