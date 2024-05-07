import { createSlice } from "@reduxjs/toolkit";

const AppSidebar = createSlice({
  name: "appNav",
  initialState: { isMenuOpen: true },

  reducers: {
    menuSidebar(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { menuSidebar } = AppSidebar.actions;

export default AppSidebar.reducer;
