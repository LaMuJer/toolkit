import {configureStore} from '@reduxjs/toolkit'
import counterSlice from "./tkReducer/counterSlice";
import toggleSlice from "./tkReducer/toggleSlice";

const tkStore =  configureStore({
    reducer: {
        counter: counterSlice,
        tkToggle: toggleSlice
    }
})

export default tkStore