import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UserContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";

const App: React.FC = () => {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/users"} render={()=> <UserContainer />}/>
                </div>
            </div>
    );
}

export default App;

