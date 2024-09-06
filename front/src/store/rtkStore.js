import { configureStore } from "@reduxjs/toolkit";
import { serverApi } from "store/serverApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()?.concat(serverApi.middleware),
});

// It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.

setupListeners(store?.dispatch);
