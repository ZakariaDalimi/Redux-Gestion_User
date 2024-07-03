import { configureStore } from "@reduxjs/toolkit";
import usersliceReducer from "./userslice";

const store = configureStore({
    reducer : {
        user : usersliceReducer
    }
})

export default store;