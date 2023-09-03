import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {headers} from "../http";
import {IUser} from "../models/IUser";
import {API_URL} from "../utils/constants";
import IUserRegisterRequest from "../models/request/IUserRegisterRequest";

const USER_URL = '/user';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + USER_URL,
        prepareHeaders: headers
    }),
    tagTypes: ['userType'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], number>({
            query: (limit) => ({
                method:'GET',
                url : '/fetchUsers',
                params: {
                    limit:limit
                }
            }),
            providesTags: ['userType']
        }),
        createUser: build.mutation<IUser, IUserRegisterRequest>({
            query: (user) => ({
                method: 'POST',
                url: '/createUser',
                body: user,
            }),
            // transformErrorResponse: (response, meta) =>
            //     response.data
            // ,
            invalidatesTags: ['userType']
        }),
        deleteUser: build.mutation<IUser, string>({
            query: (userId) => ({
                method: 'DELETE',
                url: `/deleteUser?userId=${userId}`
            }),
            invalidatesTags: ['userType']
        })
    })
})

export const {useFetchAllUsersQuery, useLazyFetchAllUsersQuery,
    useDeleteUserMutation: useDeleteUser,
    useCreateUserMutation: useCreateUser
} = userApi