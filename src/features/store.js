import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;