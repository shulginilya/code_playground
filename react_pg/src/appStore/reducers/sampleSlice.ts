import {
    createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "@/appStore/store";

interface ISample {
    name: string;
    email: string;
    age: number;
};

/*
    We define state structure
*/
export enum Status {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed'
};
interface initialStateType {
    data: ISample[],
    status: Status.idle | Status.loading | Status.succeeded | Status.failed,
    error: string | null;
};
const initialState: initialStateType = {
    data: [],
    status: Status.idle,
    error: null
};

/*
    Slice definition
*/
export const sampleSlice = createSlice({
    name: "sample",
    initialState,
    reducers: {},
});

export const selectData = (state: RootState) => state.sample;

export default sampleSlice.reducer;
