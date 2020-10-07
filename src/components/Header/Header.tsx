import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {MapStatePropsType} from "./HeaderContainer";


export const Header: React.FC<MapStatePropsType> = ({auth}) => {
    return (
        <header className={s.header}>
            <img src="https://svgsilh.com/svg/156859.svg" alt=""/>
            <div className={s.loginBlock}>
                {auth.isAuth? <div>{`Hi! ${auth.login}`}</div> : <NavLink to={"/login"} >Login</NavLink>}
            </div>
        </header>
    )
}
