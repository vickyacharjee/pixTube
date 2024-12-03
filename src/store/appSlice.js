import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'app',
    initialState:{
        isMenu:true,
        list:null,
        showProfile:null,
        isProfile:false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenu=!state.isMenu;
        },
        closeMenu:(state)=>{
            state.isMenu=false;
        },
        addList:(state,action)=>{
             state.list=action.payload
        },
        addProfile:(state,action)=>{
            state.showProfile=action.payload
        },
        toggleProfile:(state)=>{
            state.isProfile=!state.isProfile
        },
        removeProfile:(state)=>{
            state.showProfile=null;
        }


    }
})

export const {toggleMenu,closeMenu,addList,addProfile,toggleProfile,removeProfile}=appSlice.actions;
export default appSlice.reducer;
