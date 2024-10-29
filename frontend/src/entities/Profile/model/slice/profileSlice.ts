import { createSlice } from '@reduxjs/toolkit';
import { ProfileState } from '../types/ProfileState';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState: ProfileState = {
    isLoading: false
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.errorMessage = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.profileData = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;