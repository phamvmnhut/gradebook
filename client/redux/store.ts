import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import classListSlice from "./classListSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminSlice,
    classList: classListSlice,
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

// redux middleware
