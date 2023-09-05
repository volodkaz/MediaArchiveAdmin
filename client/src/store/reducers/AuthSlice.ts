import {SliceCaseReducers} from "@reduxjs/toolkit";
import AuthResponse from "../../models/responses/AuthResponse";
import {AUTH_TOKEN} from "../../utils/constants";
import {checkAuth, loginUser, logoutUser, registerUser} from "../actions/authAction";
import {createSliceApp} from "./ReducerCreator";
import {AuthState} from "../../models/store/AuthStoreTypes";
import {ActionAndInitStateAction, ActionResult} from "../../models/store/index";
import {ValidateSliceCaseReducers} from "@reduxjs/toolkit/src/createSlice";

const initialState: AuthState = {
    user:{} as AuthResponse,
    isLoading: false,
    error:''
}

function initStateFromReducer(state: AuthState, result:ActionResult<AuthResponse>) {
    state.isLoading = result.isLoading || false;
    state.error = result.error || '';
    state.user = result.data || {} as AuthResponse;
}

const actionArray:  ActionAndInitStateAction<AuthState>[] =
    [
        {action: loginUser, initStateAction: initStateFromReducer},
        {action: registerUser, initStateAction: initStateFromReducer},
        {action: logoutUser, initStateAction: initStateFromReducer},
        {action: checkAuth, initStateAction: initStateFromReducer}
    ]


const reducers: ValidateSliceCaseReducers<AuthState, SliceCaseReducers<AuthState>> = {
    logout: (state:AuthState) => {
        initStateFromReducer(state, {});
        localStorage.removeItem(AUTH_TOKEN)
    }
}

const authSlice = createSliceApp<AuthState>('auth', initialState, actionArray, reducers)

export const {logout} = authSlice.actions;
export default authSlice.reducer;
