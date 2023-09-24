import { getAllTodos } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

export const slice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
  extraReducers: bulder =>
    bulder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    }),
});

export const todosReducer = slice.reducer;
export const { addTodo, deleteTodo } = slice.actions;

export const todos = state => state.todos;
