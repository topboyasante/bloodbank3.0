import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:{
            hospitalName:'',
            isLoggedIn :false,
        }
    },
    reducers:{
        login(state){
            state.user.isLoggedIn=true
        },
        logout(state){
            state.user.isLoggedIn=false
        },
        setHospitalName(state,{payload}){
            state.user.hospitalName = payload
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer