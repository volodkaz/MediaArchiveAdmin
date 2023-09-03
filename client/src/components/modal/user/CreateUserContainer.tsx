import React, {useCallback, useState} from 'react';
import {useTypedDispatch} from "../../../hook/useTypedSelector";
import {CreateUserContainerProps, UserValidationProps} from "./userTypes";
import IUserRegisterRequest from "../../../models/request/IUserRegisterRequest";
import {IUser} from "../../../models/IUser";
import {createUser} from "../../../store/actions/UserAction";
import CreateUser from "./CreateUser";
import {Role, RoleClass} from "../../../models/store/role";

const CreateUserContainer: React.FC<CreateUserContainerProps> = React.memo(
    ({
         show, onHide = () => {}, setActive, roles
     }) => {
        console.log('CreateUserContainer')

        const dispatch = useTypedDispatch();
        const [role, setRole] = useState<RoleClass>(new RoleClass())
        const [localRoles, setLocalRoles] = useState<Role[]>([])

        const addUser = useCallback(async (values: UserValidationProps) => {
            await dispatch(createUser({
                login: values.login,
                clientSecret: values.password,
                roles: localRoles.map(role => role.roleId)
            } as IUserRegisterRequest))
                .then((data) => {
                    if (data.payload && typeof data.payload !== 'string') {
                        setActive(data.payload as IUser)
                    }
                })
                .finally(onHideHandler)
        }, [localRoles, setActive]);

        const addRolesHandler = useCallback((role: RoleClass) => {
            if (!role.isEmpty()) {
                const addedRole = localRoles.filter((entity) => role.isEquals(entity));
                if (addedRole.length === 0) {
                    setLocalRoles([...localRoles, role])
                }
            }
        }, [localRoles]);

        const removeRoleHandler = useCallback((role: Role) => {
            const changedRole = localRoles.filter((entity) => entity.roleId !== role.roleId);
            setLocalRoles(changedRole);
        }, [localRoles]);

        const onHideHandler = useCallback(() => {
            setLocalRoles([]);
            setRole(new RoleClass());
            onHide();
        }, [onHide]);

        const setRoleHandler = useCallback(
            (roleId:number) => {
                const filteredRoles = roles.filter(role => role.roleId === roleId);
                const role = filteredRoles.length > 0 ? filteredRoles[0] : new RoleClass();
                setRole(new RoleClass(role.roleId, role.name, role.comment))
            }, [roles])

        return (
            <>
                <CreateUser roles={roles} localRoles={localRoles} createUser={addUser}
                            addRolesHandler={addRolesHandler} removeRoleHandler={removeRoleHandler}
                            onHideHandler={onHideHandler} setRole={setRoleHandler} show={show} role={role}
                />
            </>
        );
    }
)

export default CreateUserContainer;