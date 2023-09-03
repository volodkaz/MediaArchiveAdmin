import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {headers} from "../http";
import AuthResponse from "../models/responses/AuthResponse";
import {IUserRequest} from "../models/request/IUserRequest";
import {API_URL} from "../utils/constants";

export const authApi = createApi({
    reducerPath: 'authApi',

    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}/auth`,
        prepareHeaders: headers,
        credentials: "include"
    }),
    tagTypes: ['authType'],
    endpoints: (build) => ({
        registration: build.mutation<string, IUserRequest>({
            query: (authData: IUserRequest) => ({
                method:'POST',
                url : '',
                body: authData
            })
        }),
        login: build.query<AuthResponse, IUserRequest>({
            query: (authData: IUserRequest) => ({
                method:'POST',
                url : '/login',
                body: authData
            })
        }),
        logout: build.mutation<AuthResponse, IUserRequest>({
            query: (authData: IUserRequest) => ({
                method:'POST',
                url : '/logout',
                body: authData
            })
        })
    })
})

export const {useLazyLoginQuery, useRegistrationMutation, useLogoutMutation} = authApi
