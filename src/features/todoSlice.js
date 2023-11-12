import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
       
        const todo = state.find(todo => todo.id === action.payload.id);
        if (todo) {
          todo.isDone = !todo.isDone;
        } else {
          console.error(`Todo with id ${action.payload.id} not found`);
        }
       },
       
    editTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      todo.description = action.payload.description;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
