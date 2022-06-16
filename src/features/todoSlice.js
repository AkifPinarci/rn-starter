import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { uuid } from "uuid";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuid.v4(),
        title: action.payload.text,
        completed: false,
      };
      state.push();
    },
  },
});

export default todoSlice;
export const { add } = todoSlice.actions;
