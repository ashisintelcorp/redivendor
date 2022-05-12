import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../store";

interface UserInfo {
  vchUserId: string;
  vchUserMob: string;
  vchUserName: string;
  vchUserEmail: string;
}
interface UserState {
  accessToken: string;
  info: UserInfo | null;
}

const initialState: UserState = {
  accessToken: '',
  info: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    setUserInfo: (state: UserState, { payload }: PayloadAction<UserInfo>) => {
      state.info = { ...state.info, ...payload };
    },
    setAccessToken: (state: UserState, { payload }: PayloadAction<string>) => {
      state.accessToken = payload
    },
    logout: (state: UserState) => {
      state = { accessToken: '', info: null }
    },
  },
});

export const selectUserInfo = (state: State) => state.user.info;
export const selectAccessToken = (state: State) => state.user.accessToken;

export const { initializeApp, setUserInfo, setAccessToken, logout } = slice.actions;
export default slice.reducer;
