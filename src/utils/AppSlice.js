import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "appNav",
  initialState: { isMenuOpen: true },

  reducers: {
    menuSidebar(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    hideSidebar(state) {
      state.isMenuOpen = false;
    },
  },
});

export const { menuSidebar, hideSidebar } = AppSlice.actions;

export default AppSlice.reducer;
