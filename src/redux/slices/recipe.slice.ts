import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface RecipeState {
  title: string;
}

// Define the initial state using that type
const initialState: RecipeState[] = [];

export const recipeSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getRecipesRedux: (state, action: PayloadAction<RecipeState>) => {
      state.push(action.payload);
    },
  },
});

export const { getRecipesRedux } = recipeSlice.actions;
