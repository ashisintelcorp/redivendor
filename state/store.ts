import { Action, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import user from "./slice/user.slice";
import car from "./slice/car.slice";
import { appName } from "app-config";

const middlewareConfiguration = { serializableCheck: false };
const reducers = combineReducers({ user, car });
const persistConfig = {
  key: "root",
  storage,
  blacklist: ['car'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: { name: appName },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function dispatchOnCall(action: Action) {
    return () => store.dispatch(action);
}