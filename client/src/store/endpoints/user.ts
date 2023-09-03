import {RootState} from "../store";
import {IUser} from "../../models/IUser";
import {isEqualsArray} from "../../utils/common";

export const getAllUsers = (state: RootState) => state.userReducer.users
export const isUserLoading = (state: RootState) => state.userReducer.isLoading
export function isEqualsUsersArray(next: IUser[], prev:IUser[]): boolean {
    const isUserEquals = (prevUser: IUser, nextUser: IUser) => {
        if(prevUser.id !== nextUser.id){
            return false;
        }
        if(prevUser.isAdmin !== nextUser.isAdmin){
            return false;
        }
        if(prevUser.isActivated !== nextUser.isActivated){
            return false;
        }
        if(prevUser.roles && nextUser.roles){
            if(prevUser.roles.length !== nextUser.roles.length){
                return false;
            }
            if(prevUser.roles.filter(prevRole => nextUser.roles.every(nextRole => nextRole === prevRole)).length !== 0){
                return false;
            }
        }
        if((!prevUser.roles && nextUser.roles) || (prevUser.roles && !nextUser.roles)){
            return false;
        }

        return true;
    }
    return isEqualsArray<IUser>(next, prev, isUserEquals)
}