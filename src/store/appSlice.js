import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'app',
    initialState:{
        isMenu:true,
        list:[]
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenu=!state.isMenu;
        },
        closeMenu:(state)=>{
            state.isMenu=false;
        },
        addList:(state,action)=>{
             state.list.push(action.payload) 
        }

    }
})

export const {toggleMenu,closeMenu,addList}=appSlice.actions;
export default appSlice.reducer;
