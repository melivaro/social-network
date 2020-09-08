import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MainStateType} from "./redux/store";
import store from "./redux/redux-store"
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: MainStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                //@ts-ignore
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
//@ts-ignore
store.subscribe(rerenderEntireTree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
