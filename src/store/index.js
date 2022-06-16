import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import todoSlice from "../features/todoSlice";

const store = configureStore({
  reducer: {
    // reducers
    todos: todoSlice,
  },
});

export default store;
