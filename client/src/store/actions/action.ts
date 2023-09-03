import {AppDispatch} from "../store";
import {AxiosError, AxiosResponse} from "axios";
import {resetError, setError} from "../reducers/ErrorReducer";
import {ErrorType} from "../../models/store/error";
import {IUserRequest} from "../../models/request/IUserRequest";
import AuthResponse from "../../models/responses/AuthResponse";

interface ErrorData{
    message: string;
}

function errorHandler(baseMessage: string, e:AxiosError<ErrorData>, dispatch:  AppDispatch){
    let message: string = baseMessage;
        message = message + ': ' + (!e.response || !e.response.data.message ? e.message : e.response!.data.message);
    dispatch(setError({type: ErrorType.AUTH_ERROR, message}))
    return message;
}

export async function asyncThunkBody<Request, Response>(authRequest: Request, dispatch:AppDispatch, rejectWithValue:any,
                                     resultData: (authRequest:Request) => Promise<AxiosResponse<Response, any>>, errorText: string)  {
    try {
        const response = await resultData(authRequest);
        dispatch(resetError(''))
        return response.data;
    }catch (e) {
        return rejectWithValue(errorHandler(errorText,
            (e instanceof AxiosError ? e : new AxiosError('Неизвестная ошибка')),
            dispatch));

    }
}