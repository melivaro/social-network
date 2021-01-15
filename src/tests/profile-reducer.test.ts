import {PostType, ProfileType} from "../types/entities";
import {actions, InitialStateType, profileReducer} from "../redux/profile-reducer";

let startState: InitialStateType;
beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCounter: 10},
            {id: 2, message: "It's my first post", likesCounter: 13},
            {id: 3, message: "Yo!", likesCounter: 17},
        ] as Array<PostType>,
        profile: {} as ProfileType,
        statusObj: {status: 'my status'},
        isSuccessStatus: false,
    }
})

test("status should be corrected", () => {

    const action = actions.setStatus({status: 'new status'})

    const finalState = profileReducer(startState, action)

    expect(finalState.statusObj.status).toBe('new status')
})

test("posts should be new length array", ()=> {

    const userProfile = {
        "aboutMe": 'some text',
        "contacts": {
            "facebook": 'fb.com',
            "website": 'cite.ru',
            "vk": 'vk.com',
            "twitter": 'tw.com',
            "instagram": 'ig.com',
            "youtube": 'yt.ru',
            "github": 'ghpg.com',
            "mainLink": 'linkEdin',
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": 'React',
        "fullName": 'Feofan',
        "userId": 777,
        "photos": {
            "small": '',
            "large": '',
        }
    }


    const action = actions.setUserProfile(userProfile)
//@ts-ignore
    const finalState = profileReducer(startState, action)

    expect(finalState.profile.lookingForAJobDescription).toBe('React')
    expect(finalState.profile.fullName).toBe('Feofan')
})

test('post should be created', () => {

    const action = actions.addPostActionCreator('test post')

    const finalState = profileReducer(startState, action)

    expect(finalState.posts.length).toBe(4)
    expect(finalState.posts[0].id).toBe(1)
    expect(finalState.posts[3].id).toBe(5)
    expect(finalState.posts[3].message).toBe('test post')
})