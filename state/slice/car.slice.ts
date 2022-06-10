import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICarType } from "models/car";
import { bookMinTime } from "utils/common";
import { State, store } from "../store";

interface ICarState {
  types: Array<ICarType>,
  search: {
    location: string;
    dateTime: Date;
    type: number;
    model: number;
    package: number;
  }
};

const initialState: ICarState = {
  types: [],
  search: {
    location: '',
    dateTime: bookMinTime(),
    type: 0,
    model: 0,
    package: 0,
  }
}

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    setSearch: (state: ICarState, { payload }: PayloadAction<ICarState['search']>) => {
      state.search = payload
    },
    setTypes: (state: ICarState, { payload }: PayloadAction<ICarState['types']>) => {
      state.types = payload
    },
  }
})

export namespace CarDispatch {
  export const setSearch = (payload: ICarState['search']) =>
    store.dispatch(carSlice.actions.setSearch(payload))
  export const setTypes = (payload: ICarState['types']) =>
    store.dispatch(carSlice.actions.setTypes(payload))
}

export const selectSearch = (state: State) => state.car.search;
export const selectTypes = (state: State) => state.car.types;


/* export namespace CarReduxStore {
  export const selectSearch = (state: State) => state.car.search;
  export const selectTypes = (state: State) => state.car.types;
} */

export default carSlice.reducer;
