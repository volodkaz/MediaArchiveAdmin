import {IUser} from "../IUser";

export interface UserState{
    users: IUser[];
    isLoading: boolean;
}