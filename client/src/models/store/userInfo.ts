import {State} from "./index";
import {IUserTab, IUserTabType} from "../IUser";

export interface UserInfoState extends State{
    tabs: IUserTab[];
}

export interface UserInfoTabTypeState extends State{
    tabTypes: IUserTabType[];
}