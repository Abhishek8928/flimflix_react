

import { createSlice } from "@reduxjs/toolkit";



const tvSlice = createSlice({
    name: "tv",
    initialState: {
        info: null
    },
    reducers: {
        addTv: function (state, action) {
            state.info = action.payload;
        },
        removeTv: function (state, action) {
            state.info = null;
        }
    }
})


export default tvSlice.reducer;

export const { addTv, removeTv } = tvSlice.actions;