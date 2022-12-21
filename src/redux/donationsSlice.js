import { createSlice } from "@reduxjs/toolkit";

const donorSlice = createSlice({
    name:'donation',
    initialState:{
        donations:[
            
        ]
    },
    reducers:{
        setDonations(state,{payload}){
            state.donations = payload
        },
        addDonation(state,action){
            state.donations = [...state.donations,action.payload]
        },
        removeDonation(state,{payload}){
            const newDonationsList = state.donations.filter((item)=>item.id !== payload)
            state.donations = newDonationsList
        }
    }
})

export const donationActions  = donorSlice.actions
export default donorSlice.reducer