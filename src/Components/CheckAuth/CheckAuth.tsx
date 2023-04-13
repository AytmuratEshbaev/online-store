import React from "react";
import { Navigate,useLocation } from "react-router-dom";
import { Cookies } from "react-cookie";

type Props = {
    children?:React.ReactNode
}

export const CheckAuth:React.FC<Props>=({ children })=> {
    const cookie = new Cookies()
    const location = useLocation()
    if (!cookie.get('token')) {
        return <Navigate to='/login' state={{from:location}} replace/>
    }
    return (
        <>
            {children}
        </>
    )
}