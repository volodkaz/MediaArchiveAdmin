import {ModalProps} from "../../../models/modal/Types";
import {UserAuthValidatorProps} from "../../../models/validators/ValidatorsType";
import {Role} from "../../../models/store/role";
import {IUser} from "../../../models/IUser";

export interface CreateUserContainerProps extends ModalProps{
    roles: Role[];
    setActive: (user: IUser) => void;
}
export interface CreateUserProps extends ModalProps{
    roles: Role[];
    localRoles: Role[];
    createUser: (user:UserValidationProps) => void;
    addRolesHandler: (role:Role) => void;
    removeRoleHandler: (role: Role) => void,
    onHideHandler: () => void,
    setRole: (role: number) => void;
    role: Role;
}
export interface UserValidationProps extends UserAuthValidatorProps{
    role: string;
}

export const initialProps:UserValidationProps = {
    login:'',
    password:'',
    checkPassword: '',
    role: ''
}

export interface errorHandler{
    message: string;
}