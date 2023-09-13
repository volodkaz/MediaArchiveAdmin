import {IItemProps} from "./index";
import {UserNotesTypeNames} from "../utils/constants";
import {IUserAccordionItem} from "../components/admin/user/UserContent";

export interface IUser extends IItemProps{
    isActivated: boolean;
    isAdmin: boolean;
    roles: number[];
}
export const userInitialState: IUser = {
    id: 0,
    name: "",
    isAdmin: false,
    isActivated: false,
    roles: []
}
/*UserInfo*/
export interface IUserInfoItemProperty extends IItemProps{
    comment:string;
}
export interface IUserTabProperty extends IUserInfoItemProperty{
    infos: IUserInfo[];
}
export interface IUserTabType extends IItemProps{
    comment:string;
}
export interface IUserTab extends IUserInfoItemProperty{
    tab: IUserTabType;
    properties: IUserTabProperty[];
}

export interface IUserInfo extends IItemProps{
    data: string;
    modifyUserId: string;
}

export interface IUserTabContainer{
    tabs: IUserTab[];
}
export const tabInitialState : IUserAccordionItem = {
    id : 0,
    name : "",
    type : UserNotesTypeNames.DEFAULT,
    item : ""
}