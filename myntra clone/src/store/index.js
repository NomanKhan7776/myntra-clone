import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import fetch_status from "./fetchStatus";
import bagSlice from "./bag";

const storeProvider = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetch_status.reducer,
    bag: bagSlice.reducer,
  },
});

export default storeProvider;
