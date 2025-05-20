import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSliec"

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;