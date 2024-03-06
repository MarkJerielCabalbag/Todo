import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    show: false,
    title: "",
    description: "",
    list: [],
    statusTitle: "",
    statusDescription: "",
    validTitle: "",
    validDescription: "",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setShow: (state, action) => {
      state.value.show = action.payload;
    },
    setTitle: (state, action) => {
      state.value.title = action.payload;
    },
    setDescription: (state, action) => {
      state.value.description = action.payload;
    },
    setList: (state, action) => {
      state.value.list.push({
        ...action.payload,
      });
    },

    setStatusTitle: (state, action) => {
      state.value.statusTitle = action.payload;
    },
    setStatusDescription: (state, action) => {
      state.value.statusDescription = action.payload;
    },
    setValidTitle: (state, action) => {
      state.value.validTitle = action.payload;
    },
    setValidDescription: (state, action) => {
      state.value.validDescription = action.payload;
    },
  },
});

export const {
  setShow,
  setTitle,
  setDescription,
  setList,
  setStatusDescription,
  setStatusTitle,
  setValidDescription,
  setValidTitle,
} = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
