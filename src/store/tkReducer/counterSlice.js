import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'count',
    initialState: {
        value: 0
    },
    reducers: {
        Add: (state,action) => {
            state.value += action.payload.amount
        } ,
        Remove: (state,action) => {
            state.value -= action.payload.amount
        }
    }
})

export const {Add, Remove} = counterSlice.actions
export default counterSlice.reducer