import React, {useContext} from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {Context} from "../index";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const auth = false;

    const {user} = useContext(Context);
    console.log(user);

    if(!user._isAuth) {
        return <Navigate to='/login' state={{from: location}}/>
    }
    return children;
};

export default RequireAuth;