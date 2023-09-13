import {ActionAndInitStateAction, ActionResult} from "../../models/store/index";
import {createSliceApp} from "./ReducerCreator";
import {IUserTab, IUserTabContainer} from "../../models/IUser";
import {UserInfoState} from "../../models/store/userInfo";
import {createUserInfo, deleteUserInfo, fetchUserInfo, updateUserInfo} from "../actions/UserInfoAction";

const initialState:UserInfoState = {
    tabs: [] as IUserTab[],
    isLoading: false
}

const actionArray:  ActionAndInitStateAction<UserInfoState>[] =
    [
        {action: fetchUserInfo, initStateAction: initStateForUserInfo},
        {action: createUserInfo, initStateAction: initStateForUserInfo},
        {action: updateUserInfo, initStateAction: initStateForUserInfo},
        {action: deleteUserInfo, initStateAction: initStateForUserInfo}
    ]

function initStateForUserInfo(state: UserInfoState, result:ActionResult<IUserTab[]>) {
    state.isLoading = result.isLoading || false;
    state.tabs = result.data ? result.data : initialState.tabs;
}

const userInfoSlice = createSliceApp<UserInfoState>('userInfo', initialState, actionArray)

export default userInfoSlice.reducer;
// export {} = userSlice.actions;