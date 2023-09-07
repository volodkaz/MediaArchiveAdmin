import React, {useCallback, useEffect} from 'react';
import CreateUserInfoTab from "./CreateUserInfoTab";
import {CreateUserInfoTabContainerProps, InfoTabFoCreate} from "./CreateUserInfoProps";
import {useTypedDispatch, useTypedSelector} from "../../../hook/useTypedSelector";
import {
    getUserInfoTabTypes,
    isEqualsUsersInfoTabTypes,
    isUserInfoTabTypeLoading
} from "../../../store/endpoints/userInfoTab";
import {fetchUserInfoTabTypes} from "../../../store/actions/UserInfoTabTypesAction";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormState, UseFormReturn} from "react-hook-form/dist/types/form";

const CreateUserInfoTabContainer: React.FC<CreateUserInfoTabContainerProps> = React.memo(({show, setShow}) => {
    const tabTypes = useTypedSelector(getUserInfoTabTypes, isEqualsUsersInfoTabTypes);
    const dispatch = useTypedDispatch();
    const isLoading = useTypedSelector(isUserInfoTabTypeLoading);

    useEffect(() => {
        dispatch(fetchUserInfoTabTypes(0));
    }, [])

    const onHideHandler = useCallback(() => {
        setValue('name', '');
        setValue('tagId', -1);
        setShow(false);
    }, []);

    const onSubmit: SubmitHandler<InfoTabFoCreate> = (data) => {
        console.log(data)
    }

    const {register, control, handleSubmit, setValue, formState: {errors, isValid}} = useForm<InfoTabFoCreate>()

    return (
        <CreateUserInfoTab show={show} onHideHandler={onHideHandler} tabTypes={tabTypes} isLoading={isLoading}
                           useFormReturn={{register, control, handleSubmit} as UseFormReturn<InfoTabFoCreate>}
                           formState={{errors, isValid} as FormState<InfoTabFoCreate>}
                           onSubmit={onSubmit}
        />
    );
});

export default CreateUserInfoTabContainer;