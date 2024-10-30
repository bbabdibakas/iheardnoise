import { createSlice } from '@reduxjs/toolkit';
import { PostState } from '../types/PostState';
import { fetchPostData } from '../services/fetchPostData';

const initialState: PostState = {
    isLoading: false
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostData.pending, (state) => {
                state.errorMessage = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPostData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.postData = action.payload
            })
            .addCase(fetchPostData.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            });
    },
});

export const { actions: postActions } = postSlice;
export const { reducer: postReducer } = postSlice;