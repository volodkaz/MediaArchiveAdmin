import axios, {AxiosError} from 'axios';
import {API_URL, AUTH_TOKEN, AUTH_TOKEN_START} from "../utils/constants";
import {createAsyncThunk,} from "@reduxjs/toolkit";
import AuthResponse from "../models/responses/AuthResponse";
import {ThunkApiConfigApp} from "../models/store/index";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `${AUTH_TOKEN_START} ${localStorage.getItem(AUTH_TOKEN) || ''}`;
    return config;
})

export const headers = (headers: Headers) => {
    headers.set('Authorization', `${AUTH_TOKEN_START} ${localStorage.getItem(AUTH_TOKEN) || ''}`);
}

$api.interceptors.response.use((config) => {
    return config;
},async (error: AxiosError) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (error.response?.status === 401 && error.config && token) {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/auth/refresh`, JSON.parse(error.config!.data))
            localStorage.setItem(AUTH_TOKEN, response.data.accessToken);
            return $api.request(error.config);
        } catch (e) {
            localStorage.removeItem(AUTH_TOKEN);
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfigApp>()

export default $api;
