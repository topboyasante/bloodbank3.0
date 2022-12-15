import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import donationsReducer from "./donationsSlice";
import donorReducer from "./donorSlice";

export const BloodBankStore = configureStore({
    reducer:{
        auth:authReducer,
        donor:donorReducer,
        donations:donationsReducer
    }
})