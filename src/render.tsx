import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {MainStateType} from "./redux/state";

export const rerenderEntireTree = (state: MainStateType, addPost: (postMessage: string) => void) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
);
}