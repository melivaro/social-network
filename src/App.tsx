import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./redux/redux-store";
import {thunks as thunksAuth} from "./redux/auth-reducer";
import {thunks as thunksApp} from "./redux/app-reducer"
import {compose} from "redux";
import {Loader} from "./components/common/Loader/Loader";

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    authTC: () => void
    initializedApp: () => void
}

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {

        if(!this.props.initialized) {
            return <Loader/>
        }

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
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({initialized: state.app.initialized})

const {initializedApp} = thunksApp
const {authTC} = thunksAuth
const AppWithRouterContainer = compose<React.ComponentType>(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,{authTC, initializedApp}),withRouter)(App)

export const Main = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <AppWithRouterContainer/>
            </Provider>
        </BrowserRouter>
    )
}
