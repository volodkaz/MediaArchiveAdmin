import {Role} from "../../../services/RoleService";

export interface RoleValidatorProps{
    comment:string;
}

export const initialProps: RoleValidatorProps = {
    comment: ''
}

export interface RoleItemProps{
    role: Role;
    isDeleted?: boolean;
    isChanged?: boolean;
    isReadOnly?: boolean;
}