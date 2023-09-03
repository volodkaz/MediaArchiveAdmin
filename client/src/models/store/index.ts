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
// type GetState<ThunkApiConfig> = ThunkApiConfig extends {
//         state: infer State
//     }
//     ? State
//     : unknown
// type GetExtra<ThunkApiConfig> = ThunkApiConfig extends { extra: infer Extra }
//     ? Extra
//     : unknown
// type GetDispatch<ThunkApiConfig> = ThunkApiConfig extends {
//         dispatch: infer Dispatch
//     }
//     ? FallbackIfUnknown<
//         Dispatch,
//         ThunkDispatch<
//             GetState<ThunkApiConfig>,
//             GetExtra<ThunkApiConfig>,
//             AnyAction
//             >
//         >
//     : ThunkDispatch<GetState<ThunkApiConfig>, GetExtra<ThunkApiConfig>, AnyAction>
//
// export type BaseThunkAPIApp<ThunkApiConfig> = BaseThunkAPI<
//     GetState<ThunkApiConfig>,
//     GetExtra<ThunkApiConfig>,
//     GetDispatch<ThunkApiConfig>,
//     GetRejectValue<ThunkApiConfig>,
//     GetRejectedMeta<ThunkApiConfig>,
//     GetFulfilledMeta<ThunkApiConfig>
//     >
//
// type GetRejectValue<ThunkApiConfig> = ThunkApiConfig extends {
//         rejectValue: infer RejectValue
//     }
//     ? RejectValue
//     : unknown
//
// type GetFulfilledMeta<ThunkApiConfig> = ThunkApiConfig extends {
//         fulfilledMeta: infer FulfilledMeta
//     }
//     ? FulfilledMeta
//     : unknown
//
// type GetRejectedMeta<ThunkApiConfig> = ThunkApiConfig extends {
//         rejectedMeta: infer RejectedMeta
//     }
//     ? RejectedMeta
//     : unknown
