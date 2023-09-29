import {AppDispatch, RootState} from "../../store/store";
import {AsyncThunkPayloadCreator} from "@reduxjs/toolkit/src/createAsyncThunk";
import {TypedActionCreator} from "@reduxjs/toolkit/dist/mapBuilders";
import {CaseReducer} from "@reduxjs/toolkit/src/createReducer";
import {ActionCreator, AsyncThunk, Draft} from "@reduxjs/toolkit";

export interface State{
    isLoading: boolean;
}
export type ThunkApiConfigApp = {
    state: RootState,
    dispatch: AppDispatch,
    rejectValue: string,
    payloadCreator: AsyncThunkPayloadCreator<any, any>,
    extra?: unknown,
    serializedErrorType?: unknown
    pendingMeta?: unknown
    fulfilledMeta?: unknown
    rejectedMeta?: unknown
}

export interface ActionReducer<State>{
    actionCreator: TypedActionCreator<string>
    reducer: CaseReducer<State, ReturnType<ActionCreator<any>>>
}
export interface ActionResult<Returned>{
    data?: Returned;
    isLoading?:boolean;
    error?: string;
}
export interface ActionAndInitStateAction<State, Request = any, Response = any>{
    action: AsyncThunk<Response, Request, ThunkApiConfigApp>;
    initStateAction: (state: Draft<State>, result:ActionResult<Response>) => void;
}
export interface IEquals<T>{
    isEquals?: (role: T) => boolean;
}
