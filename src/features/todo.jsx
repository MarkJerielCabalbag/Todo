import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    todo: "",
    list: [],
  },
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.todo = action.payload;
      state.value.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      const newList = state.value.list.filter(
        (item) => item.id !== action.payload
      );
      state.value.list.push(newList);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
