import React from "react";

export const StoreContext = React.createContext(null);

//@ts-ignore
export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
}