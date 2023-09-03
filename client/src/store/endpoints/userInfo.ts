import {RootState} from "../store";
import {IUserTab} from "../../models/IUser";
import {isEqualsArray} from "../../utils/common";

export const getUserInfo = (state: RootState) => state.userInfoReducer.tabs;
export const isUserInfoLoading = (state: RootState) => state.userInfoReducer.isLoading;
export function isEqualsUsersInfo(next: IUserTab[], prev:IUserTab[]): boolean {
    const isUserTabEquals = (prevTab: IUserTab, nextTab: IUserTab) => {
        if(prevTab.id !== nextTab.id || prevTab.comment !== nextTab.comment
            || prevTab.name !== nextTab.name || prevTab.tabType.name !== nextTab.tabType.name){
            return false;
        }

        if(prevTab.property && nextTab.property){
            if(prevTab.property.length !== nextTab.property.length){
                return false;
            }
            if(prevTab.property
                .filter(prevTab => nextTab.property
                    .every(nextTab => nextTab.id === prevTab.id
                        && nextTab.name === prevTab.name
                        && nextTab.comment === prevTab.comment
                    )).length !== 0){
                return false;
            }
        }

        return !(!prevTab.property && nextTab.property || prevTab.property && !nextTab.property);

    }
    return isEqualsArray<IUserTab>(next, prev, isUserTabEquals);
}