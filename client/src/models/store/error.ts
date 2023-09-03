import {PayloadAction} from "@reduxjs/toolkit";

export interface Error{
    type:ErrorType;
    message: string;
}
export interface ErrorState{
    error: Error;
    isError: boolean;
}

export interface ErrorAction extends PayloadAction<Error>{

}

export enum ErrorType{
    NONE= '',
    AUTH_ERROR= 'AUTH_ERROR',
    ADMIN_ERROR= 'ADMIN_ERROR'
}

export interface ErrorNavProps{
    error: Error;
    isShow: boolean;
    onCloseHandler: () => void;
}