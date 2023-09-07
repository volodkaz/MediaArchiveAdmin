import {asyncThunkBody} from "./action";
import $api, {createAppAsyncThunk} from "../../http/index";
import {IUserInfo, IUserTabContainer} from "../../models/IUser";
import {userInfo} from "../../utils/endpoints";
import {InfoTabRequest} from "../../components/modal/userinfo/CreateUserInfoProps";

export const createUserInfo = createAppAsyncThunk<IUserInfo, InfoTabRequest>(
    'userInfo/createUserInfo',
    async (userInfoTabRequest:InfoTabRequest, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<InfoTabRequest, IUserTabContainer>(userInfoTabRequest, dispatch, rejectWithValue,
            () => $api.post<IUserTabContainer>(userInfo.createUserInfo, userInfoTabRequest), 'Ошибка при создании пользовательских данных');
    }
)
export const updateUserInfo = createAppAsyncThunk<IUserInfo, IUserInfo>(
    'userInfo/updateUserInfo',
    async (userInfoRequest:IUserInfo, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<IUserInfo, IUserTabContainer>(userInfoRequest, dispatch, rejectWithValue,
            () => $api.post<IUserTabContainer>(userInfo.updateUserInfo, userInfoRequest), 'Ошибка при обновлении пользовательских данных');
    }
)
export const deleteUserInfo = createAppAsyncThunk(
    'userInfo/deleteUserInfo',
    async (id:number, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<number, IUserTabContainer>(id, dispatch, rejectWithValue,
            () => $api.delete<IUserTabContainer>(`${userInfo.deleteUserInfo}?userId=${id}`), 'Ошибка при удалении пользовательских данных');
    }
)
export const fetchUserInfo = createAppAsyncThunk(
    'userInfo/fetchUserInfo',
    async (userId:number, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<number, IUserTabContainer>(userId, dispatch, rejectWithValue,
            () => $api.get<IUserTabContainer>(`${userInfo.fetchUserInfo}?userId=${userId}`), 'Ошибка при загрузке пользовательских данных');
    }
)