import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserDetails, IUserInfo, IUserToken } from "services/user/auth.model";
import { State } from "../store";

const initialState: IUserDetails = {
  info: null,
  token: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    setUserDetails: (state: IUserDetails, { payload }: PayloadAction<IUserDetails>) => {
      state.info = payload.info
      state.token = payload.token
    },
    setUserInfo: (state: IUserDetails, { payload }: PayloadAction<IUserInfo>) => {
      state.info = { ...state.info, ...payload };
    },
    setToken: (state: IUserDetails, { payload }: PayloadAction<IUserToken>) => {
      state.token = payload
    },
    userLogout: (state: IUserDetails) => {
      state = { info: null, token: null, }
    },
  },
});

export const selectUserInfo = (state: State) => state.user.info;
export const selectAccessToken = (state: State) => state.user.token?.accessToken || null;

export const { initializeApp, setUserDetails, setUserInfo, setToken, userLogout } = slice.actions;
export default slice.reducer;
