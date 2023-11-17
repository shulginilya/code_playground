import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sampleReducer from "@/appStore/reducers/sampleSlice";
import type { PartialDeep } from 'type-fest';

export const store = configureStore({
    reducer: {
        sampleSlice: sampleReducer,
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

export type PartialRootState = PartialDeep<RootState>;
