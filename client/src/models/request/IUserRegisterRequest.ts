import {IUserRequest} from "./IUserRequest";

export default interface IUserRegisterRequest extends IUserRequest{
    roles: number[]
}