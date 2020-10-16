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
    }
})

test("following should be follow", ()=>{

    const aciton = actions.followSuccess(3)

    const finalState = userReducer(startState, aciton)

    expect(finalState.users[2].followed).toBe(true)
})

test("totalCount should be corrected count", ()=>{

    const action = actions.setTotalCount(100)

    const  finalState = userReducer(startState, action)

    expect(finalState.totalCount).toBe(100)
})

test("currentPage should be corrected currentPage number", ()=> {
    const action = actions.setCurrentPage(10)

    const endState = userReducer(startState, action)

    expect(endState.currentPage).toBe(10)
})