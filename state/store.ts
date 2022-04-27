import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import tshirt from "./slice/tshirt.slice";

const middlewareConfiguration = { serializableCheck: false };
const reducers = combineReducers({ tshirt });
const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: { name: "SEOintell" },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof store.getState>;

/* export function dispatchOnCall(action) {
    return () => store.dispatch(action);
} */
