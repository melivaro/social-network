import {actions, userReducer} from "./user-reducer";

test("following should be follow", ()=>{

    const startState = {
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

    const aciton = actions.followAC("3")

    const finalState = userReducer(startState, aciton)

    expect(finalState.users[2].following).toBe(true)
})