import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store.ts';
import { fetchAuthentication } from './authenticationAPI.ts';

export interface AuthenticationState {
    status: boolean
}

const initialState: AuthenticationState = {
    status: false
}

export const loginAsync = createAsyncThunk(
    'authenticate',
    async (authenticated: boolean) => {
        const response = await fetchAuthentication(authenticated);
        return response.data;
    }
)

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
      logout: (state) => {
        state.status = false;
      }
    },
});


export default authenticationSlice.reducer;