import { createSlice } from "@reduxjs/toolkit";

const fetch_status = createSlice({
  name: "fetchStatus",
  initialState: {
    isFetchDone: false,
    isFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.isFetchDone = true;
    },
    markFetchStart: (state) => {
      state.isFetching = true;
    },
    markFetchEnd: (state) => {
      state.isFetching = false;
    },
  },
});

export const fetchAction = fetch_status.actions;
export default fetch_status;
