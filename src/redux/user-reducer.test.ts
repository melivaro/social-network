import {actions, userReducer} from "./user-reducer";

test("following should be follow", ()=>{

    const startState = {
        users: [
            {
                id: "1",
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
                id: "2",
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
                id: "3",
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
                id: "4",
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
        ]
    }

    const aciton = actions.followAC("3")

    const finalState = userReducer(startState, aciton)

    expect(finalState.users[2].followed).toBe(true)
})