import {IUserTabType} from "../../../models/IUser";
import {Control, FormState, UseFormRegister, UseFormReturn} from "react-hook-form/dist/types/form";
import {SubmitHandler} from "react-hook-form";

export default interface CreateUserInfoProps{
    show: boolean;
    onHideHandler: () => void;
    tabTypes: IUserTabType[];
    isLoading: boolean;
    onSubmit: SubmitHandler<InfoTabRequest>;
    useFormReturn: UseFormReturn<InfoTabRequest>;
    formState: FormState<InfoTabRequest>;
}

export interface CreateUserInfoTabContainerProps{
    show: boolean;
    setShow: (show: boolean) => void;
    userId: number;
    // setActive: (tab: IUserTabType) => void;
}

export interface InfoTabRequest {
    name: string;
    tabTypeId: number;
    userId: number;
    comment: string;
}