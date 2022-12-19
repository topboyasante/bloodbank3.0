import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:{
            isLoggedIn :false,
            JWT:''
        }
    },
    reducers:{
        login(state){
            state.user.isLoggedIn=true
        },
        logout(state){
            state.user.isLoggedIn=false
        },
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer