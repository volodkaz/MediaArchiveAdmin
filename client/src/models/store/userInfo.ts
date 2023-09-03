import {State} from "./index";
import {IUserTab} from "../IUser";

export interface UserInfoState extends State{
    tabs: IUserTab[];
}