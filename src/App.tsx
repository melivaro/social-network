import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {SuperMegaStateType} from "./redux/state";



function App(props: SuperMegaStateType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path={"/profile"} render={()=><Profile posts={props.state.ProfilePage.posts}/>}/>
                    <Route path={"/dialogs"} render={()=><Dialogs dialogState={props.state.DialogPage}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

