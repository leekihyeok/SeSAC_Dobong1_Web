import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./module/todo";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  todo: todoReducer,
});
