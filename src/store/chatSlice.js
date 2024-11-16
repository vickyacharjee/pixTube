import { createSlice } from "@reduxjs/toolkit";
import { chatVolume } from "../utils/constants";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[] 
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(chatVolume,1)
            state.messages.unshift(action.payload)
        }
    }
})

export const {addMessage}= chatSlice.actions;
export default chatSlice.reducer;