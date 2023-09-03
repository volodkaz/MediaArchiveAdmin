export interface IItem {
    id: number;
    title: string;
    isActive?: boolean;
}

export interface IItemProps {
    id: string;
}

interface IDefault{
    isDefault: string;
}
export interface IEmail extends IDefault, IItemProps{
    email: string;
}
export interface IPhoneNumber extends IDefault, IItemProps{
    phoneNumber: string;
}