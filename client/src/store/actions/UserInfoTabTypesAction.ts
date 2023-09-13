import $api, {createAppAsyncThunk} from "../../http/index";
import {IUserTabContainer, IUserTabType} from "../../models/IUser";
import {asyncThunkBody} from "./action";
import {userInfoTabType} from "../../utils/endpoints";

export const createUserTab = createAppAsyncThunk<IUserTabType[], IUserTabType>(
    'userInfoTab/createTabType',
    async (userInfoRequest:IUserTabType, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<IUserTabType, IUserTabContainer>(userInfoRequest, dispatch, rejectWithValue,
            () => $api.post<IUserTabContainer>(userInfoTabType.createUserTab, userInfoRequest), 'Ошибка при создании типа вкладки');
    }
)

export const deleteUserTab = createAppAsyncThunk(
    'userInfoTab/deleteTabType',
    async (id:number, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<number, IUserTabType[]>(id, dispatch, rejectWithValue,
            () => $api.delete<IUserTabType[]>(`${userInfoTabType.deleteUserTab}?userId=${id}`), 'Ошибка при удалении типа вкладки');
    }
)
export const fetchUserTabs = createAppAsyncThunk(
    'userInfoTab/fetchTabType',
    async (limit:number, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<number, IUserTabType[]>(limit, dispatch, rejectWithValue,
            () => $api.get<IUserTabType[]>(`${userInfoTabType.fetchUserTab}?limit=${limit}`), 'Ошибка при загрузке типов вкладок');
    }
)