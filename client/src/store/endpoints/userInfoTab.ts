import {RootState} from "../store";
import {IUserTabType} from "../../models/IUser";

export const getUserInfoTabTypes = (state: RootState) => state.userInfoTabTypeReducer.tabTypes;
export const isUserInfoTabTypeLoading = (state: RootState) => state.userInfoTabTypeReducer.isLoading;
export function isEqualsUsersInfoTabTypes(next: IUserTabType[], prev:IUserTabType[]): boolean {
    return false;
}