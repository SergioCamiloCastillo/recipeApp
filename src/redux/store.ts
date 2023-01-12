import { configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from "./slices/recipe.slice";
// ...

export const store = configureStore({
  reducer: {
    recipeReducer: recipeSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
