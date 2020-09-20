import {PostType} from "../types/entities";
import {actions, profileReducer} from "./profile-reducer";

test("newPostText should be correct string change", ()=>{
    const startState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCounter: 10},
            {id: 2, message: "It's my first post", likesCounter: 13},
            {id: 3, message: "Yo!", likesCounter: 17},
        ] as Array<PostType>,
        newPostText: ""
    }

    const action = actions.updateNewPostTextActionCreator("beer")

    const finalState = profileReducer(startState, action)

    expect(finalState.newPostText.length).toBe(4)
    expect(finalState.newPostText).toBe("beer")
})

test("posts should be new length array", ()=>{

    const startState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCounter: 10},
            {id: 2, message: "It's my first post", likesCounter: 13},
            {id: 3, message: "Yo!", likesCounter: 17},
        ] as Array<PostType>,
        newPostText: "hugo"
    }

    const action = actions.addPostActionCreator()

    const finalState = profileReducer(startState, action)

    expect(finalState.posts.length).toBe(4)
    expect(finalState.posts[3].message).toBe("hugo")

})