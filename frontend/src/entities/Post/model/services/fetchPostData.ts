import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LOCALSTORAGE_USERDATA_KEY } from 'shared/const/localstorage';
import { Post } from '../types/PostState';

export const fetchPostData = createAsyncThunk<
    Post,
    string,
    { rejectValue: string }
>(
    'post/fetchPostData',
    async (postId, thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            const response = await axios.get<Post>(`http://localhost:8000/post/${postId}`, {
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