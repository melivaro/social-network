import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {MapDispatchPropsType, MapStatePropsType} from "./HeaderContainer";


export const Header: React.FC<MapStatePropsType & MapDispatchPropsType> = ({auth, logout}) => {
    const onLogout = () => {
        logout()
    }

    return (
        <header className={s.header}>
            <img src="https://svgsilh.com/svg/156859.svg" alt=""/>
            <div className={s.loginBlock}>
                {auth.isAuth ? <div>{`Hi! ${auth.login}`}
                    <button onClick={onLogout}>logout</button>
                </div> : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}
