import {IUserTabType} from "../../../models/IUser";
import {Control, FormState, UseFormRegister, UseFormReturn} from "react-hook-form/dist/types/form";
import {SubmitHandler} from "react-hook-form";

export default interface CreateUserInfoProps{
    show: boolean;
    onHideHandler: () => void;
    tabTypes: IUserTabType[];
    isLoading: boolean;
    onSubmit: SubmitHandler<InfoTabFoCreate>;
    useFormReturn: UseFormReturn<InfoTabFoCreate>;
    formState: FormState<InfoTabFoCreate>;
}

export interface CreateUserInfoTabContainerProps{
    show: boolean;
    setShow: (show: boolean) => void
    // setActive: (tab: IUserTabType) => void;
}

export interface InfoTabFoCreate{
    name: string;
    tagId: number;
}