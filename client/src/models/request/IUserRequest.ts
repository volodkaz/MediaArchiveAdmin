export interface IUserRequest {
    login: string;
    secret?: string;
}
export interface IUserIdRequest extends IUserRequest{
    id: number;
}