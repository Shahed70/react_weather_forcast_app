import { createSlice } from "@reduxjs/toolkit";
import { fiveDayApiAction } from "../actions/fiveDayApiAction";

const initialState = {
    loader:false,
    apiData:[],
    errors:""
}
const fiveDayApiSlice = createSlice(
    {
         name:"fiveDayWeather",
         initialState,
        extraReducers:{
            [fiveDayApiAction.pending] : (state, action) => {
                state.loader = true
            },
            [fiveDayApiAction.fulfilled] : (state, action) => {
                state.loader = false
                state.apiData = action.payload
            },
            [fiveDayApiAction.rejected] : (state, action) => {
              state.errors = action.payload
            }
        }
})

export default fiveDayApiSlice.reducer