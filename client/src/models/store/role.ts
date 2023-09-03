import {State} from "./index";

export interface Role{
    roleId: number;
    name: string;
    comment: string;
    isEquals(role: Role): boolean;
    isEmpty(): boolean;
}

export interface RoleResponse{
    roleId: number;
}

export interface RoleState extends State{
    roles: RoleClass[];
}

export class RoleClass implements Role{
    roleId: number;
    name: string;
    comment: string;

    isEquals(role: Role): boolean {
        return this.roleId === role.roleId;
    }
    isEmpty(): boolean {
        return this.name ? this.name.length === 0 : !this.name;
    }
    constructor(roleId?: number, name?: string, comment?:string) {
        this.roleId = roleId ? roleId : 0;
        this.name = name ? name : '';
        this.comment = comment ? comment : '';

    }
}