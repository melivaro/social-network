import {ActionsTypes} from "./store";

export type UserType = {
    id: string
    fullName: string
    avatar: string
    following: boolean
    status: string
    location: {
        country: string
        city: string
    }
}

export type UserPageType = {
    users: Array<UserType>
}

type UserReducer = (state: UserPageType, action: ActionsTypes, userId: string) => { state: UserPageType }

enum TYPE_AC {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW"
}

const {FOLLOW, UNFOLLOW} = TYPE_AC

const initialState: UserPageType = {
    users: [
        {
            id: "1",
            avatar: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
            following: false,
            fullName: "Izolda",
            status: "cilling",
            location: {country: "Russia", city: "Novosibirsk"}
        },
        {
            id: "2",
            avatar: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
            following: true,
            fullName: "Ignat",
            status: "job",
            location: {country: "Ukraine", city: "Kiev"}
        },
        {
            id: "3",
            avatar: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
            following: false,
            fullName: "Farhat",
            status: "how you?",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: "4",
            avatar: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
            following: true,
            fullName: "Amrod",
            status: "Great job fabrique de italia",
            location: {country: "Italy", city: "Milan"}
        },
    ]
}

const userReducer = (state: UserPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.id ? {...u, following: true} : u)]
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.id ? {...u, following: false} : u)]
            }
        default:
            return state
    }
}

export const followAC = (id: string) => {
    return {
        type: FOLLOW,
        id: id
    } as const
}

export const unfollowAC = (id: string) => {
    return {
        type: UNFOLLOW,
        id: id
    } as const
}

export default userReducer