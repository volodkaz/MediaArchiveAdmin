import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionResult} from "../../models/store/index";
import {IItem} from "../../models/index";

interface CanvasState{
    items: IItem[];
    isActiveCanvas: boolean;
}
export interface AdminState {
    canvas: CanvasState;
    error?: string;
    isLoading?: boolean;
}

const initialState: AdminState = {
    canvas: {items: [{id: 1, title: 'Пользователи'},
                     {id: 2, title: 'Медиа'}],
            isActiveCanvas:false},
    error: '',
    isLoading:false
}

// function initStateFromReducer(state: AdminState, result:ActionResult<any>) {
//     state.isLoading = result.isLoading || false;
//     state.error = result.error || '';
//     // state.canvas.isActiveCanvas = result.data || {} as AuthResponse;
// }

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        canvas(state){

        },
        setActive(state, action: PayloadAction<number>){
            state.canvas.items.forEach((item) => {
                item.isActive = false;
                if(item.id === action.payload){
                    item.isActive = true;
                }
            })
        },
        setActiveCanvas(state){
            state.canvas.isActiveCanvas = !state.canvas.isActiveCanvas;
        }
    }
})

export const adminAction = adminSlice.actions;
export default adminSlice.reducer;