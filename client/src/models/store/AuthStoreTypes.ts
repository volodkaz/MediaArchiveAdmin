import AuthResponse from "../responses/AuthResponse";

export interface AuthState{
    user: AuthResponse;
    isLoading: boolean;
    error: string;
}

