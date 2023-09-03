import {asyncThunkBody} from "./action";
import $api, {createAppAsyncThunk} from "../../http/index";
import {IUser} from "../../models/IUser";
import {user} from "../../utils/endpoints";
import IUserRegisterRequest from "../../models/request/IUserRegisterRequest";

export const createUser = createAppAsyncThunk<IUser, IUserRegisterRequest>(
    'user/createUser',
    async (userRequest:IUserRegisterRequest, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody<IUserRegisterRequest, IUser>(userRequest, dispatch, rejectWithValue,
            () => $api.post<IUser>(user.createUser, userRequest), 'Ошибка при создании пользователя');
    }
)
export const deleteUser = createAppAsyncThunk(
    'user/deleteUser',
    async (id:string, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody(id, dispatch, rejectWithValue,
            () => $api.delete<IUser>(`${user.deleteUser}?userId=${id}`), 'Ошибка при удалении пользователя');
    }
)
export const fetchAllUsers = createAppAsyncThunk(
    'user/fetchAllUsers',
    async (limit:number, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody(limit, dispatch, rejectWithValue,
            () => $api.get<IUser[]>(`${user.fetchAllUsers}?limit=${limit}`), 'Ошибка при загрузке пользователей');
    }
)