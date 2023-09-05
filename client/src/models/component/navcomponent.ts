import AuthResponse from "../responses/AuthResponse";
import {IUser} from "../IUser";

export interface NavComponentProps{
    user: AuthResponse;
    openCloseCanvasHandler: () => void;
    logoutHandler: (user: IUser) => void;
    loginHandler: () => void;
}