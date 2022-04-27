import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../store";

interface ItshirtConfig {
  design: string;
  color: {
    colorPrimary: string;
    colorSecondary: string;
    colorTertiary: string;
    colorAccent: string;
  },
  logo: {
    url: string;
    display: boolean;
  },
  number: {
    color: string;
    value: number;
  }
}
interface ItshirtState {
  config: ItshirtConfig;
  currentScreen: string;
}
const initialState: ItshirtState = {
  config: {
    design: '',
    color: {
      colorPrimary: '',
      colorSecondary: '',
      colorTertiary: '',
      colorAccent: '',
    },
    logo: {
      url: '',
      display: true,
    },
    number: {
      color: '',
      value: 2,
    }
  },
  currentScreen: 'DESIGN'
};

const slice = createSlice({
  name: "tshirt",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    setTshirtConfig: (state, { payload }: PayloadAction<ItshirtConfig>) => {
      state.config = { ...state.config, ...payload }
    },
  },
});

export const selectTshirtConfig = (state: State) => state.tshirt.config;

export const { initializeApp, setTshirtConfig } = slice.actions;
export default slice.reducer;
