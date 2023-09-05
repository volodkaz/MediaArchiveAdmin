import {IUser, IUserInfo, IUserTab} from "../IUser";
import {Role} from "../store/role";
import {IUserAccordionItem} from "../../components/admin/user/UserContent";

export interface AdminUsersProps{
    users: IUser[];
    roles: Role[];
    isLoading: boolean;
    activeUser: IUser;
    removeUserHandler: (id: number) => void;
    createUserHandlerVisible: () => void;
    createRoleHandlerVisible: () => void;
    isCreateUserModalVisible: boolean;
    isManageRolesModalVisible: boolean;
    onHideCreateUserHandler: () => void;
    onHideManageRoleHandler: () => void;
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
    deleteTab: (id: number) => void;
    isLoading: boolean;
}