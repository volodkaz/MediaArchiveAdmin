import {IUser, IUserInfo, IUserTab} from "../IUser";
import {Role} from "../store/role";
import {IUserAccordionItem} from "../../components/admin/user/UserContent";

export interface AdminUsersProps{
    users: IUser[];
    isLoading: boolean;
    activeUser: IUser;
    removeUserHandler: (id: number) => void;
    createUserHandlerVisible: () => void;
    createRoleHandlerVisible: () => void;
    setActiveUserHandler: (user: IUser) => void;
}

export interface UserContentContainerProps {
    userId: number;
    login: string;
}

export interface UserContentProps {
    tabs: IUserTab[];
    activeTab: IUserAccordionItem;
    setActive: (tab: IUserAccordionItem) => void;
    addTabHandler: () => void;
    editTabHandler: () => void;
    deleteTabHandler: (id: number) => void;
    saveTabHandler:(tab: IUserAccordionItem) => void;
    isLoading: boolean;
}