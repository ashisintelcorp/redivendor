import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../store";

interface UserInfo {
  vchUserId: string;
  vchUserMob: string;
  vchUserName: string;
  vchUserEmail: string;
}
interface UserState {
  info: UserInfo;
  accessToken: string;
}

const initialState: UserState = {
  info: { vchUserId: "", vchUserMob: "", vchUserName: "", vchUserEmail: "" },
  accessToken: "",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    setUserInfo: (state, { payload }: PayloadAction<UserInfo>) => {
      state.info = { ...state.info, ...payload };
    },
    setAccessToken: (
      state,
      { payload }: PayloadAction<{ accessToken: string }>
    ) => {
      state.accessToken = payload.accessToken;
    },
    logout: (state) => {
      state.info = initialState.info;
    },
  },
});

export const selectUserInfo = (state: State) => state.user.info;
export const selectAccessToken = (state: State) => state.user.accessToken;

export const { initializeApp, setUserInfo, logout, setAccessToken } =
  slice.actions;
export default slice.reducer;
