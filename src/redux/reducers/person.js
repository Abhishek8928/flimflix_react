

import { createSlice } from "@reduxjs/toolkit";



const personSlice = createSlice({
    name: "person",
    initialState: {
        info: null
    },
    reducers: {
        addPerson: function (state, action) {
            state.info = action.payload;
        },
        removePerson: function (state, action) {
            state.info = null;
        }
    }
})


export default personSlice.reducer;

export const { addPerson, removePerson } = personSlice.actions;