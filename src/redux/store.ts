import { configureStore } from "@reduxjs/toolkit";
import baseAPI from "@/redux/baseAPI";

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
