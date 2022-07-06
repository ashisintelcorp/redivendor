import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "models/common/userState";
import { State, store } from "../store";

const initialState: IUserState = {
  role: IUserState.EnumUserRoles.USER,
  token: {
    accessToken: ''
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    setUser: (state: IUserState, { payload }: PayloadAction<IUserState>) => {
      state.role = payload.role
      if (payload.role == IUserState.EnumUserRoles.ADMIN)
        state.admin = payload.admin
      if (payload.role == IUserState.EnumUserRoles.OWNER)
        state.owner = payload.owner
      if (payload.role == IUserState.EnumUserRoles.DRIVER)
        state.driver = payload.driver
      if (payload.role == IUserState.EnumUserRoles.USER)
        state.user = payload.user
      state.token = payload.token
    },
    setUserLogout: (state: IUserState) => {
      state.role = IUserState.EnumUserRoles.USER
      state.token = { accessToken: '' }
    }
  }
})

export namespace UserDispatch {
  export const setUser = (payload: IUserState) =>
    store.dispatch(userSlice.actions.setUser(payload))
  export const setUserLogout = (payload: IUserState) =>
    store.dispatch(userSlice.actions.setUserLogout())
}

export namespace UserReduxStore {
  export const selectUserRole = (state: State) => state.user.role;
  export const selectAdminProfile = (state: State) => state.user.admin;
  export const selectOwnerProfile = (state: State) => state.user.owner;
  export const selectDriverProfile = (state: State) => state.user.driver;
  export const selectUserProfile = (state: State) => state.user.user;
  export const selectAccessToken = (state: State) => state.user.token?.accessToken;
}

export default userSlice.reducer;
