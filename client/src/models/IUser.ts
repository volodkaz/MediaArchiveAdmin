import {IItemProps} from "./index";
import {UserNotesTypeNames} from "../utils/constants";
import {IUserAccordionItem} from "../components/admin/user/UserContent";
import {UseFormReset} from "react-hook-form/dist/types/form";
import {FieldValues} from "react-hook-form";

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
    formLabel: string;
}
export interface IUserTabProperty extends IItemProps {
    property: IUserInfoItemProperty;
    infos: IUserInfo[];
}
export interface IUserTabType extends IItemProps{
    comment:string;
}
export interface IUserTab extends IUserInfoItemProperty{
    tab: IUserTabType;
    properties: IUserTabProperty[];
}

export interface IUserInfo{
    id: number;
    data: string;
    modifyUserId: string;
}
export interface IUserInfoContainerRequest{
    useId: number;
    infos: IUserInfo[];
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

export interface IUserInfoActiveTab {
    tabId?: number;
    isEdit?: boolean;
    isReset?: boolean;
}