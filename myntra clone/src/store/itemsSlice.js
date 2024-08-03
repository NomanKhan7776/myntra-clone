import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItem: (store, actions) => {
      return [...store, ...actions.payload];
    },
  },
});
export const itemsAction = itemSlice.actions;
export default itemSlice;
