import {IUser} from "../IUser";

export default interface AuthResponse{
    accessToken: string;
    refreshToken: string;
    client: IUser;
    isAuth: boolean;
}