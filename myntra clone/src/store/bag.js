import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      const newItem = action.payload;
      const existantItem = state.find((bagItem) => bagItem.id === newItem.id);
      if (!existantItem) {
        // state.push(newItem);
        return [...state, newItem];
      }
      return state;
    },
    removeFromBag: (state, action) => {
      return state.filter((items) => items.id !== action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice;
