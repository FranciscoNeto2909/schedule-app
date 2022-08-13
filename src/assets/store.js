import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "./slice"
export const store = configureStore({
    reducer:{
        schedule:scheduleSlice
    }
})