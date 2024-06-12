import { getAccessToken, getRefreshToken, removeTokens, setAccessToken, setRefreshToken } from "@/lib/tokenService";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authSliceT {
    refreshToken: string;
    accessToken: string;
}

const initialState: authSliceT = {
    refreshToken: getRefreshToken(),
    accessToken: getAccessToken()
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<{ accesToken: string, refreshToken: string }>) => {
            setAccessToken(action.payload.accesToken);
            setRefreshToken(action.payload.refreshToken)
            state.accessToken = action.payload.accesToken
            state.refreshToken = action.payload.refreshToken
        },
        removeToken: (state) => {
            removeTokens();
            state.accessToken = "";
            state.refreshToken = "";
        }
    }
})
export const { setToken,removeToken } = authSlice.actions;

export default authSlice.reducer