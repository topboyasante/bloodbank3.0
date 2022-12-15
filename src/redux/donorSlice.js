import { createSlice } from '@reduxjs/toolkit'

const donorSlice = createSlice({
    name:'donor',
    initialState:{
        donors:[
           
        ]
    },
    reducers:{
        setDonors(state,{payload}){
            state.donors = payload
        },
        addDonor(state,action){
            state.donors.push(action.payload)
        },
    }
})
export const donorActions = donorSlice.actions
export default donorSlice.reducer