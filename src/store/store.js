import { postReducer } from "./reducers/postReducer";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    post:{
         post:[],
         loading: false,
         error: null,
    }
}
export const store = configureStore({
    reeducer: {
        post: postReducer,
    },
    preloadedState: initialState,
});