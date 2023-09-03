import {adminAction, AdminState} from "../reducers/AdminSlice";
import {AppDispatch} from "../store";
import {IItem} from "../../models/index";


export const setActiveAction = (dispatch: AppDispatch, items: IItem[], id: number) => {
    items.forEach((item) => {
        item.isActive = false;
        if(item.id === id){
            item.isActive = true;
        }
    })
    // dispatch(adminAction.setActive(items))
}