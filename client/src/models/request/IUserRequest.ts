export interface IUserRequest {
    login: string;
    clientSecret?: string;
}
export interface IUserIdRequest extends IUserRequest{
    id: number;
}