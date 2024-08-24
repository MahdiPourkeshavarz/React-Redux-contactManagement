import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import contactApi from "./contactSlice";
import { searchReducer } from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(contactApi.middleware);
  },
});

setupListeners(store.dispatch);
