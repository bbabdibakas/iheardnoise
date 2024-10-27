import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../types/UserState';

const initialState: UserState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            localStorage.setItem('LOCALSTORAGE_USERDATA_KEY', JSON.stringify(action.payload))
        },
        resetUserData: (state) => {
            localStorage.removeItem('LOCALSTORAGE_USERDATA_KEY')
            state.userData = undefined;
        },
        initUserData: (state) => {
            const userData = localStorage.getItem('LOCALSTORAGE_USERDATA_KEY')
            if (userData) {
                state.userData = JSON.parse(userData)
            }
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;