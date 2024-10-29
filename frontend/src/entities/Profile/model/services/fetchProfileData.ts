import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Profile } from '../types/ProfileState';
import { LOCALSTORAGE_USERDATA_KEY } from 'shared/const/localstorage';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    { rejectValue: string }
>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            const response = await axios.get<Profile>(`http://localhost:8000/profile/${profileId}`, {
                headers: {
                    authorization: localStorage.getItem(LOCALSTORAGE_USERDATA_KEY) || ''
                }
            });

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