import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, MainStateType, updateNewPostText} from "./redux/state";

// импорт и типизация стэйта функций пропсы

export const rerenderEntireTree = (state: MainStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
);
}