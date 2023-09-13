import React, {useCallback, useEffect} from 'react';
import CreateUserInfoTab from "./CreateUserInfoTab";
import {CreateUserInfoTabContainerProps, InfoTabRequest} from "./CreateUserInfoProps";
import {useTypedDispatch, useTypedSelector} from "../../../hook/useTypedSelector";
import {
    getUserInfoTabTypes,
    isEqualsUsersInfoTabTypes,
    isUserInfoTabTypeLoading
} from "../../../store/endpoints/userInfoTab";
import {fetchUserTabs} from "../../../store/actions/UserInfoTabTypesAction";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormState, UseFormReturn} from "react-hook-form/dist/types/form";
import {createUserInfo} from "../../../store/actions/UserInfoAction";

const CreateUserInfoTabContainer: React.FC<CreateUserInfoTabContainerProps> = React.memo(({show, setShow, userId}) => {
    const tabTypes = useTypedSelector(getUserInfoTabTypes, isEqualsUsersInfoTabTypes);
    const dispatch = useTypedDispatch();
    const isLoading = useTypedSelector(isUserInfoTabTypeLoading);

    useEffect(() => {
        dispatch(fetchUserTabs(0));
    }, [])

    const onHideHandler = useCallback(() => {
        setValue('name', '');
        setValue('tabId', -1);
        setShow(false);
    }, []);

    const onSubmit: SubmitHandler<InfoTabRequest> = async (data) => {
        data.userId = userId;
        await dispatch(createUserInfo(data));
    }

    const {register, control, handleSubmit, setValue, formState: {errors, isValid}} = useForm<InfoTabRequest>()

    return (
        <CreateUserInfoTab show={show} onHideHandler={onHideHandler} tabTypes={tabTypes} isLoading={isLoading}
                           useFormReturn={{register, control, handleSubmit} as UseFormReturn<InfoTabRequest>}
                           formState={{errors, isValid} as FormState<InfoTabRequest>}
                           onSubmit={onSubmit}
        />
    );
});

export default CreateUserInfoTabContainer;