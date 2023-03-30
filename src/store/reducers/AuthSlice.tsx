interface initialType {
    user: string | null;
    token: string | null;
}

const initialState: initialType = {
    user: null,
    token: null
}

import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer;

export const selectCurrentToken = (state:any) => state.auth.token