import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo(state, { payload }) {
      state.todos = state.todos.filter(({ id }) => {
        return id !== payload;
      });
    },
  },
});
console.log(todoSlice);

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
