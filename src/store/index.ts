import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./trips/tripsSlice"

export const store = configureStore({
    reducer:{
     trips:tripReducer
    },
    devTools:true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch