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
        removeDonation(state,action){
            const newDonationsList = state.donations.filter(donation=> donation.id !== action.payload)
            state.donations = newDonationsList
        }
    }
})

export const donationActions  = donorSlice.actions
export default donorSlice.reducer