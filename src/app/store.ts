import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import contactSlice from "../app/contactSlice";
import productSlice from "../app/productSlice";

export const store = configureStore({
  reducer: {
    contact: contactSlice,
    product : productSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
