import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_URL} from "../utils/constants";
import {headers} from "../http/index";
import {RoleItemProps} from "../components/modal/role/roleTypes";

const USER_URL = '/role';

export interface Role{
    roleId: string;
    comment: string;
}
export const roleApi = createApi({
    reducerPath: 'roleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + USER_URL,
        prepareHeaders: headers
    }),
    tagTypes: ['roleType'],
    endpoints: (build) => ({
        fetchAllRoles: build.query<Role[], number>({
            query:() => ({
                url:'/getAllRoles'
            }),
            providesTags: ['roleType']
        }),
        fetchAllRoleItems: build.query<RoleItemProps[], number>({
            query:() => ({
                url:'/getAllRoles'
            }),
            transformResponse: (response: Role[]) => {
                let roleItems : RoleItemProps[] = [];
                for (const responseElement of response) {
                    const roleItem = {role: responseElement, isDeleted:false, isChanged:false, isReadOnly:false} as RoleItemProps;
                    roleItems = [...roleItems, roleItem]
                }
                return roleItems
            } ,
            providesTags: ['roleType']
        })
    })
})

export const {useFetchAllRolesQuery: useFetchAllRoles,
    useFetchAllRoleItemsQuery: useFetchAllRoleItems
} = roleApi