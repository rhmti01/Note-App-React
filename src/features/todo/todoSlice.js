import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage only once
const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: savedNotes,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((note) => note.id !== action.payload);
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.updatedTitle,
              description: action.payload.updatedDescription,
              priority: action.payload.updatedPriority,
            }
          : note
      );
    },
  },
});

export const { addTodo, removeTodo, completeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
