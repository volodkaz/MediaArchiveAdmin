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
    firstName = 'firstName',
    secondName = 'secondName',
    patronymic = 'patronymic',
    phoneNumbers = 'phoneNumbers',
    emails = 'emails',
    login = 'login'
}

export enum UserNotesTypeNames {
    USER_DETAILS = 1,
    USER_NOTES = 2,
    DEFAULT = 3
}