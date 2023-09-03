import AuthResponse from "../responses/AuthResponse";

export interface NavComponentProps{
    user: AuthResponse;
    openCloseCanvasHandler: () => void;
    logoutHandler: () => void;
    loginHandler: () => void;
}