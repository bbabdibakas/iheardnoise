import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthByUsernameProps {
    username: string;
    password: string;
}

interface User {
    id: string
    username: string
}

export const authByUsername = createAsyncThunk<
    User,
    AuthByUsernameProps,
    { rejectValue: string }
>(
    'auth/authByUsername',
    async (authData, thunkApi) => {
        const { dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await axios.post<User>('http://localhost:8000/auth', authData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            if (axios.isAxiosError(e) && e.response?.data) {
                return rejectWithValue(e.response.data);
            }
            return rejectWithValue('An unexpected error occurred');
        }
    },
);