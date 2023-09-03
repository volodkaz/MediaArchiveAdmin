import {Role, RoleState} from "../../models/store/role";
import {ActionAndInitStateAction, ActionResult} from "../../models/store/index";
import {createSliceApp} from "./ReducerCreator";
import {fetchAllRoles} from "../actions/RoleAction";
import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {getAllRoles} from "../endpoints/roles";

const initialState:RoleState = {
    roles: [] as Role[],
    isLoading: false
}
function  initStateForFetchAll(state: RoleState, result:ActionResult<Role[]>) {
    state.isLoading = result.isLoading || false;
    state.roles = result.data ? result.data : initialState.roles;
}

const actionArray:  ActionAndInitStateAction<RoleState>[] =
    [
        {action: fetchAllRoles, initStateAction: initStateForFetchAll},
    ]

const userSlice = createSliceApp<RoleState>('role', initialState, actionArray);


export type Return = (state: RootState) => Role[] | undefined;
export const rolesSelector =
    createSelector(getAllRoles, (roles) => {
        return roles
    })
export default userSlice.reducer;