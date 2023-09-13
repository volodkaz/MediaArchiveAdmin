import {RootState} from "../store";
import {IUserTab} from "../../models/IUser";
import {isEqualsArray} from "../../utils/common";

export const getUserInfo = (state: RootState) => state.userInfoReducer.tabs;
export const isUserInfoLoading = (state: RootState) => state.userInfoReducer.isLoading;
export function isEqualsUsersInfo(next: IUserTab[], prev:IUserTab[]): boolean {
    const isUserTabEquals = (prevTab: IUserTab, nextTab: IUserTab) => {
        if(prevTab.id !== nextTab.id || prevTab.comment !== nextTab.comment
            || prevTab.name !== nextTab.name || prevTab.tab.name !== nextTab.tab.name){
            return false;
        }

        if(prevTab.properties && nextTab.properties){
            if(prevTab.properties.length !== nextTab.properties.length){
                return false;
            }
            if(prevTab.properties
                .filter(prevTab => nextTab.properties
                    .every(nextTab => nextTab.id === prevTab.id
                        && nextTab.name === prevTab.name
                        && nextTab.comment === prevTab.comment
                    )).length !== 0){
                return false;
            }
        }

        return !(!prevTab.properties && nextTab.properties || prevTab.properties && !nextTab.properties);

    }
    return isEqualsArray<IUserTab>(next, prev, isUserTabEquals);
}