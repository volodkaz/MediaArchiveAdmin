import {UserInfoTabTypeState} from "../../models/store/userInfo";
import {IUserTabType} from "../../models/IUser";
import {ActionAndInitStateAction, ActionResult} from "../../models/store/index";
import {createSliceApp} from "./ReducerCreator";
import {createUserTab, deleteUserTab, fetchUserTabs} from "../actions/UserInfoTabTypesAction";

const initialState:UserInfoTabTypeState = {
    tabTypes: [] as IUserTabType[],
    isLoading: false
}

const actionArray:  ActionAndInitStateAction<UserInfoTabTypeState>[] =
    [
        {action: fetchUserTabs, initStateAction: initStateForUserInfo},
        {action: createUserTab, initStateAction: initStateForUserInfo},
        {action: deleteUserTab, initStateAction: initStateForUserInfo}
    ]

function initStateForUserInfo(state: UserInfoTabTypeState, result:ActionResult<IUserTabType[]>) {
    state.isLoading = result.isLoading || false;
    state.tabTypes = result.data ? result.data : initialState.tabTypes;
}

const userInfoTabTypeSlice = createSliceApp<UserInfoTabTypeState>('userInfo', initialState, actionArray)

export default userInfoTabTypeSlice.reducer;