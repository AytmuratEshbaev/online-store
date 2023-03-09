import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authAPI } from '../../services/AuthService';

interface AuthState {
    user: {username: string, password: string}
    token: string | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    user: {username: '', password: ''},
    token: null,
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});
