import { configureStore } from "@reduxjs/toolkit";
import appNav from "./AppSidebar";

const store = configureStore({
  reducer: {
    app: appNav,
  },
});

export default store;
