import {State} from "./index";
import {IUserInfoActiveTab, IUserTab, IUserTabType} from "../IUser";

export interface UserInfoState extends State{
    tabs: IUserTab[];
    formUpdateData: IUserInfoActiveTab;
}

export interface UserInfoTabTypeState extends State{
    tabTypes: IUserTabType[];
}