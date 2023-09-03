import {RootState} from "../store";

export const getAllRoles = (state:RootState) => state.roleReducer.roles;
export const isLoading = (state:RootState) => state.roleReducer.isLoading;