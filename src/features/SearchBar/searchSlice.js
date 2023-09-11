import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const searchSlice = createSlice({
    name: 'searchTerm',
    initialState,
    reducers: {
        updateTerm: (state, {payload}) => {
            state = payload
            return state;
        },
        resetTerm: (state) => {
            state = '';
            return state;
        }
    }
})
export const { updateTerm, resetTerm }  = searchSlice.actions;
export default searchSlice.reducer;