

import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:"movie",
    initialState:{
        info:null
    },
    reducers:{
        addMovie : function (state,action){
            state.info = action.payload;
        },
        removeMovie:function(state,action){
            state.info = null;
        }
    }
})


export default movieSlice.reducer;

export const { addMovie, removeMovie } = movieSlice.actions;