import {asyncThunkBody} from "./action";
import $api, {createAppAsyncThunk} from "../../http/index";
import {IUserInfo, IUserInfoContainerRequest, IUserTab} from "../../models/IUser";
import {userInfo} from "../../utils/endpoints";
import {InfoTabRequest} from "../../components/modal/userinfo/CreateUserInfoProps";

export const createUserInfo = createAppAsyncThunk<IUserInfo, InfoTabRequest>(
    'userInfo/createUserInfo',
    async (userInfoTabRequest:InfoTabRequest, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<InfoTabRequest, IUserTab[]>(userInfoTabRequest, dispatch, rejectWithValue,
            () => $api.post<IUserTab[]>(userInfo.createUserInfo, userInfoTabRequest), 'Ошибка при создании пользовательских данных');
    }
)
export const updateUserInfo = createAppAsyncThunk<IUserTab[], IUserInfoContainerRequest>(
    'userInfo/updateUserInfo',
    async (userInfoRequest:IUserInfoContainerRequest, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<IUserInfoContainerRequest, IUserTab[]>(userInfoRequest, dispatch, rejectWithValue,
            () => $api.post<IUserTab[]>(userInfo.updateUserInfo, userInfoRequest), 'Ошибка при обновлении пользовательских данных');
    }
)
export const deleteUserInfo = createAppAsyncThunk(
    'userInfo/deleteUserInfo',
    async (id:number, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<number, IUserTab[]>(id, dispatch, rejectWithValue,
            () => $api.delete<IUserTab[]>(`${userInfo.deleteUserInfo}?infoTabId=${id}`), 'Ошибка при удалении пользовательских данных');
    }
)
export const fetchUserInfo = createAppAsyncThunk(
    'userInfo/fetchUserInfo',
    async (userId:number, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<number, IUserTab[]>(userId, dispatch, rejectWithValue,
            () => $api.get<IUserTab[]>(`${userInfo.fetchUserInfo}?userId=${userId}`), 'Ошибка при загрузке пользовательских данных');
    }
)
