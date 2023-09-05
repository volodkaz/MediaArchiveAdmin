import $api, {createAppAsyncThunk} from "../../http";
import AuthResponse from "../../models/responses/AuthResponse";
import {IUserIdRequest, IUserRequest} from "../../models/request/IUserRequest";
import {auth} from "../../utils/endpoints";
import {AUTH_TOKEN} from "../../utils/constants";
import {asyncThunkBody} from "./action";


async function login(authRequest: IUserRequest) {
    const response = await $api.post<AuthResponse>(auth.login, authRequest);
    localStorage.setItem(AUTH_TOKEN, response.data.accessToken)
    return response;
}

export const loginUser = createAppAsyncThunk(
    'auth/login',
    async (authRequest:IUserRequest, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody(authRequest, dispatch, rejectWithValue, login, 'Ошибка входа');
    }
)

export const registerUser = createAppAsyncThunk(
    'auth/registration',
    async (authRequest:IUserRequest, {rejectWithValue, dispatch}) => {
         return await asyncThunkBody(authRequest, dispatch, rejectWithValue,
             () => $api.post<AuthResponse>(auth.registration, authRequest),
             "Ошибка регистрации");
    }
)

async function logout(authRequest: IUserIdRequest) {
    const response = await $api.post<AuthResponse>(auth.logout, authRequest);
    localStorage.removeItem(AUTH_TOKEN)
    return response;
}

export const logoutUser = createAppAsyncThunk(
    'auth/logout',
    async (authRequest:IUserIdRequest, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody(authRequest, dispatch, rejectWithValue,
            logout, "Ошибка выхода");
    }
)
export const checkAuth = createAppAsyncThunk(
    'auth/check',
    async (authRequest:IUserRequest, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody(authRequest, dispatch, rejectWithValue,
            () => $api.post<AuthResponse>(auth.checkAuth),
            "Ошибка проверки авторизации");
    },
)