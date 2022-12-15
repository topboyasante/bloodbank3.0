import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const BloodBankStore = configureStore({
    reducer:{
        auth:authReducer
    }
})