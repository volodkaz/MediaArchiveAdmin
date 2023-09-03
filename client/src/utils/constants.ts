import {IEmail, IPhoneNumber} from "../models/index";

export const API_URL = 'http://localhost:8081';
export const AUTH_TOKEN:string ='token'
export const AUTH_TOKEN_START: string = 'Noga'

export enum ThunkStatus{
    OK='OK',
    PENDING='PENDING',
    ERROR='ERROR'
}

export enum UserInfoProperty{
    firstName,
    secondName,
    patronymic,
    phoneNumbers,
    emails,
    login
}

export enum UserNotesTypeNames {
    USER_DETAILS = "userDetails",
    USER_NOTES = "userNotes",
    DEFAULT = "default"
}