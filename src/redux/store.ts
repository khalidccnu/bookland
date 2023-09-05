import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux/cart/cartSlice";
import baseAPI from "@/redux/baseAPI";

const store = configureStore({
  reducer: {
    cartSlice,
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
