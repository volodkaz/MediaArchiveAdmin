import {RootState} from "../store";

export const getAuth = (state:RootState) => state.authReducer
export const getAuthUser = (state:RootState) => state.authReducer.user