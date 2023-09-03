import React, {useCallback, useEffect, useState} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../../hook/useTypedSelector";
import {getAllUsers, isEqualsUsersArray, isUserLoading} from "../../../store/endpoints/user";
import {Role} from "../../../models/store/role";
import {isEqualsArray} from "../../../utils/common";
import {getAllRoles} from "../../../store/endpoints/roles";
import {deleteUser, fetchAllUsers} from "../../../store/actions/UserAction";
import {fetchAllRoles} from "../../../store/actions/RoleAction";
import AdminUsers from "./AdminUsers";
import {IUser, userInitialState} from "../../../models/IUser";

const AdminUserContainer = () => {
    console.log('AdminUsers')
    const [activeUser, setActiveUser] = useState<IUser>(userInitialState)
    const [isCreateUserModalVisible, setCreateUserVisible] = useState(false)
    const [isManageRolesModalVisible, setCreateNewRoleVisible] = useState(false)

    const users = useTypedSelector(getAllUsers, isEqualsUsersArray)
    const isLoading = useTypedSelector(isUserLoading)

    const isEqualsRolesArray = (next: Role[], prev: Role[]) => {
        return isEqualsArray<Role>(next, prev, (prevRole, nextRole) => prevRole.roleId === nextRole.roleId)
    }

    // const roles = useTypedSelector(rolesSelector)
    const roles = useTypedSelector<Role[]>(getAllRoles, isEqualsRolesArray)

    const dispatch = useTypedDispatch()


    useEffect(() => {
        dispatch(fetchAllUsers(5))
    },[])

    const removeUser = useCallback((id: string)=> {
        dispatch(deleteUser(id))
    }, [])

    const onHideCreateUserHandler = useCallback(() => setCreateUserVisible(false), [])

    const onHideManageRoleHandler = useCallback(() => setCreateNewRoleVisible(false), [])

    const setActiveUserHandler = useCallback((user: IUser) => setActiveUser(user), [])

    const  createUserHandlerVisible = useCallback(async () => {
        await dispatch(fetchAllRoles(5))
        setCreateUserVisible(true);
    }, [])

    const createRoleHandlerVisible = useCallback(() => {
        setCreateNewRoleVisible(true);
    }, [])

    return (
        <AdminUsers users={users} roles={roles} isLoading={isLoading} activeUser={activeUser} setActiveUserHandler={setActiveUserHandler}
        createUserHandlerVisible={createUserHandlerVisible} createRoleHandlerVisible={createRoleHandlerVisible} removeUserHandler={removeUser}
        onHideCreateUserHandler={onHideCreateUserHandler} onHideManageRoleHandler={onHideManageRoleHandler} isCreateUserModalVisible={isCreateUserModalVisible}
        isManageRolesModalVisible={isManageRolesModalVisible}/>
    );
};

export default AdminUserContainer;