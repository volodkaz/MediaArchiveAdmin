import {createSlice} from "@reduxjs/toolkit";
import {ErrorAction, ErrorState, ErrorType} from "../../models/store/error";
import {SliceCaseReducers} from "@reduxjs/toolkit/src/createSlice";

const initialState:ErrorState = {
    error: {
        type: ErrorType.NONE,
        message: ''
    },
    isError: false
}

const initStateFromReducer = (state: ErrorState, action?:ErrorAction) => {
    if(action){
        state.error = action.payload;
        state.isError = true;
    }else{
        state.error = initialState.error;
        state.isError = initialState.isError;
    }
}
const errorSlice = createSlice<ErrorState, SliceCaseReducers<ErrorState>>({
    name: 'error',
    initialState: initialState,
    reducers:
        {
            setError(state, action: ErrorAction) {
                initStateFromReducer(state, action);
            },
            resetError(state, action: ErrorAction) {
                initStateFromReducer(state);
            }
        }
})

export const errorAction = errorSlice.actions;
export const {setError, resetError} = errorAction;
export default errorSlice.reducer