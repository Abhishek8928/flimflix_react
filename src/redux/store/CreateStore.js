

import { configureStore } from "@reduxjs/toolkit";
import personReducer from "../reducers/person";
import tvReducers from "../reducers/tv";
import moviesReducers from "../reducers/movies";

const store = configureStore({
    reducer:{
        person:personReducer,
        tv:tvReducers,
        movie:moviesReducers
    }
})

export default store;