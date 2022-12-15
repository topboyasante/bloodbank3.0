import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import donorReducer from "./donorSlice";

export const BloodBankStore = configureStore({
    reducer:{
        auth:authReducer,
        donor:donorReducer
    }
})