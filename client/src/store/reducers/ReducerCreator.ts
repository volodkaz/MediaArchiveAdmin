import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import {ActionAndInitStateAction, ActionReducer} from "../../models/store/index";
import {ValidateSliceCaseReducers} from "@reduxjs/toolkit/src/createSlice";


function prepareBuilderCase<State, Returned, ThunkArgs = any>(actionArray: ActionAndInitStateAction<State, ThunkArgs, Returned>[])
     : ActionReducer<State>[]
{
     let reducerArray: ActionReducer<State>[] = [];

    for (const actionAndInitFunc of actionArray) {

        reducerArray.push({
            actionCreator: actionAndInitFunc.action.fulfilled,
            reducer: (state, action: PayloadAction<Returned>) =>
                actionAndInitFunc.initStateAction(state, {data: action.payload})
        });

        reducerArray.push({
            actionCreator: actionAndInitFunc.action.pending,
            reducer: (state) =>
                actionAndInitFunc.initStateAction(state, {isLoading: true})
        });

        reducerArray.push({
            actionCreator: actionAndInitFunc.action.rejected,
            reducer: (state, action: PayloadAction<string>) =>
                actionAndInitFunc.initStateAction(state, {error: action.payload})
        });
    }


     return reducerArray;
 }

export function createSliceApp<State, Request = any, Response = any >(name: string, initialState: State,
                                                                      actionArray: ActionAndInitStateAction<State, Request, Response>[],
                                                                      reducers: ValidateSliceCaseReducers<State, SliceCaseReducers<State>> = {}) {
    const reducerArray: ActionReducer<State>[] = prepareBuilderCase(actionArray);
    return createSlice({
        name: name,
        initialState: initialState,
        reducers: reducers,
        extraReducers:
            (builder) => {
                for (const reducer of reducerArray) {
                    builder.addCase(reducer.actionCreator, reducer.reducer);
                }
            }
    })
}




