import { configureStore } from "@reduxjs/toolkit";
import appNav from "./AppSlice";

const store = configureStore({
  reducer: {
    app: appNav,
  },
});

export default store;
