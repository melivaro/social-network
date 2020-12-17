import {actions, InitialStateType, userReducer} from "../redux/user-reducer";

let startState: InitialStateType;

beforeEach(()=>{
    startState = {
        users: [
            {
                id: 1,
                uniqueUrlName: "",
                photos: {
                    small: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
                    large: "",
                },
                followed: false,
                name: "Izolda",
                status: "cilling",
                // location: {country: "Russia", city: "Novosibirsk"}
            },
            {
                id: 2,
                uniqueUrlName: "",
                photos: {
                    small: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
                    large: "",
                },
                followed: true,
                name: "Ignat",
                status: "job",
                // location: {country: "Ukraine", city: "Kiev"}
            },
            {
                id: 3,
                uniqueUrlName: "",
                photos: {
                    small: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
                    large: "",
                },
                followed: false,
                name: "Farhat",
                status: "how you?",
                // location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 4,
                uniqueUrlName: "",
                photos: {
                    small: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
                    large: "",
                },
                followed: true,
                name: "Amrod",
                status: "Great job fabrique de italia",
                // location: {country: "Italy", city: "Milan"}
            },
        ],
        totalCount: 0,
        pageSize: 10,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [1]
    }
})

test("following should be follow", () => {

    const action = actions.followSuccess(3)

    const finalState = userReducer(startState, action)

    expect(startState.users[2].followed).toBe(false)
    expect(finalState.users[2].followed).toBe(true)
})

test("unfollowing should be unfollow", () => {

    const action = actions.unfollowSuccess(2)

    const finalState = userReducer(startState, action)

    expect(startState.users[1].followed).toBe(true)
    expect(finalState.users[1].followed).toBe(false)
})

test("setUsers should be corrected", () => {

    const users = [
        {
            id: 1,
            uniqueUrlName: "",
            photos: {
                small: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
                large: "",
            },
            followed: false,
            name: "Stan",
            status: "driving",
        },
        {
            id: 2,
            uniqueUrlName: "",
            photos: {
                small: "https://image.freepik.com/free-vector/handdrawn-samurai-logo_78838-23.jpg",
                large: "",
            },
            followed: false,
            name: "Barbara",
            status: "diving",
        },
    ]

    const action = actions.setUsers(users)

    const finalState = userReducer(startState, action)

    expect(startState.users.length).toBe(4)
    expect(finalState.users.length).toBe(2)
    expect(finalState.users[0].name).toBe('Stan')
})

test("totalCount should be corrected count", () => {

    const action = actions.setTotalCount(100)

    const finalState = userReducer(startState, action)

    expect(finalState.totalCount).toBe(100)
})

test("currentPage should be corrected currentPage number", () => {
    const action = actions.setCurrentPage(10)

    const endState = userReducer(startState, action)

    expect(endState.currentPage).toBe(10)
})

test("loader should be correct work", () => {

    const startAction = actions.setLoader(true)
    const stopAction = actions.setLoader(false)

    const loaderStart = userReducer(startState,startAction)
    const loaderStop = userReducer(startState,stopAction)

    expect(loaderStart.isFetching).toBeTruthy()
    expect(loaderStop.isFetching).toBeFalsy()
})

test('followingInProgress should be corrected',()=>{
    const action = actions.toggleFollowingProgress(true, 1)
    const finalState = userReducer(startState,action)

    expect(finalState.followingInProgress[0]).toBe(1)
})