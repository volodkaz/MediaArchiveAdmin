import {ActionAndInitStateAction, ActionResult} from "../../models/store/index";
import {createSliceApp} from "./ReducerCreator";
import {IUserInfoActiveTab, IUserTab} from "../../models/IUser";
import {UserInfoState} from "../../models/store/userInfo";
import {createUserInfo, deleteUserInfo, fetchUserInfo, updateUserInfo} from "../actions/UserInfoAction";
import {PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers} from "@reduxjs/toolkit";

const initialState:UserInfoState = {
    tabs: [] as IUserTab[],
    isLoading: false,
    formUpdateData:{
        tabId: 0,
        isEdit: false,
        isReset: false
    }
}

const initStateSetResetFormFromReducer = (state: UserInfoState, isReset: boolean) => {
    if(state.formUpdateData.tabId){
        state.formUpdateData.isEdit = false;
        state.formUpdateData.isReset = isReset;
    }
}
const initStateSetActiveFormFromReducer = (state: UserInfoState, activeTabId: number) => {
    state.formUpdateData.tabId = activeTabId;
    state.formUpdateData.isEdit = false;
    state.formUpdateData.isReset = false;
}
const initStateSetEditFormFromReducer = (state: UserInfoState, isEdit: boolean) => {
    if(state.formUpdateData.tabId){
        state.formUpdateData.isEdit = isEdit;
        state.formUpdateData.isReset = false;
    }
}
const reducers: ValidateSliceCaseReducers<UserInfoState, SliceCaseReducers<UserInfoState>> = {
    tabUserInfoSetReset: (state:UserInfoState, payload: PayloadAction<boolean>) => {
        initStateSetResetFormFromReducer(state, payload.payload);
    },
    tabUserInfoSetActive: (state:UserInfoState, payload: PayloadAction<number>) => {
        initStateSetActiveFormFromReducer(state, payload.payload);
    },
    tabUserInfoFormSetEdit: (state:UserInfoState, payload: PayloadAction<boolean>) => {
        initStateSetEditFormFromReducer(state, payload.payload);
    }
}

const actionArray:  ActionAndInitStateAction<UserInfoState>[] =
    [
        {action: fetchUserInfo, initStateAction: initStateForUserInfo},
        {action: createUserInfo, initStateAction: initStateForUserInfo},
        {action: updateUserInfo, initStateAction: initStateForUserInfo},
        {action: deleteUserInfo, initStateAction: initStateForUserInfo},
    ]

function initStateForUserInfo(state: UserInfoState, result:ActionResult<IUserTab[]>) {
    state.isLoading = result.isLoading || false;
    state.tabs = result.data ? result.data : initialState.tabs;
    state.formUpdateData = {tabId: 0, isEdit: false, isReset: false};
}

const userInfoSlice = createSliceApp<UserInfoState>('userInfo', initialState, actionArray, reducers)

export default userInfoSlice.reducer;
export const {tabUserInfoSetReset, tabUserInfoSetActive, tabUserInfoFormSetEdit} = userInfoSlice.actions;