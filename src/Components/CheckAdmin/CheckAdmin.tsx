import React from "react";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { authSlice } from "../../store/reducers/AuthSlice";

type Props = {
    children?: React.ReactNode
}


export const CheckAdmin: React.FC<Props> = ({ children }) => {
    const cookie = new Cookies()
    const dispatch = useAppDispatch()
    const login = authSlice.actions.login;

    const decode: {
        access_token: string,
        sub: string,
        is_admin: number
    } = jwtDecode(cookie.get('token'));

    const { token } = useAppSelector((state) => state.auth)
    React.useEffect(() => {
        if (token === '') {
            dispatch(login(cookie.get('token')))
        }
    }, [])
    if (decode.is_admin !== 1) {
        return <Navigate to='/' replace={true} />
    }
    return (
        <>
            {children}
        </>
    )
}