import React, {useEffect, useState} from 'react';
import {IUserInfo, IUserInfoContainerRequest, IUserTab} from "../../../models/IUser";
import {FormControlProps} from "react-bootstrap/FormControl";
import UserDetailsBody from "./UserDetailsBody";
import {SubmitHandler, useForm} from "react-hook-form";
import {UseFormReturn} from "react-hook-form/dist/types/form";
import {UserInfoProperty} from "../../../utils/constants";
import {useTypedDispatch, useTypedSelector} from "../../../hook/useTypedSelector";
import {tabUserInfoSetReset} from "../../../store/reducers/UserInfoSlice";
import {getAuthUser} from "../../../store/endpoints/auth";
import {updateUserInfo} from "../../../store/actions/UserInfoAction";

interface UserDetailsBodyProps {
    tab: IUserTab;
    userId: number;
}

export interface TabProps{
    name: string;
    comment?: string;
    data: IUserInfo[];
}
export interface IFormUserDetailProps{
    firstName: string;
    secondName: string;
    patronymic: string;
    phoneNumbers: string;
    emails: string;
    login: string;
}
const UserDetailsBodyContainer: React.FC<UserDetailsBodyProps> = ({tab, userId}) => {

    const initialTabProps: Map<string, TabProps> = new Map<string, TabProps>([
        [UserInfoProperty.firstName, {name:'', data: [{id: 0, data: '',  modifyUserId: ''}]}],
        [UserInfoProperty.secondName, {name:'', data: [{id:0, data: '',  modifyUserId:''}]}],
        [UserInfoProperty.patronymic, {name:'', data: [{id:0, data: '',  modifyUserId:''}]}],
        [UserInfoProperty.phoneNumbers, {name:'', data: [{id:0, data: '',  modifyUserId:''}]}],
        [UserInfoProperty.emails, {name:'', data: [{id:0, data: '',  modifyUserId:''}]}],
        [UserInfoProperty.login, {name:'', data: [{id:0, data: '',  modifyUserId:''}]}]
]);

    const initialFormUserDetailProps: IFormUserDetailProps = {
        firstName: '',
        secondName: '',
        patronymic: '',
        phoneNumbers: '',
        emails: '',
        login: ''
    }
    const initialControlPropsProps: FormControlProps = {
        readOnly: true,
        plaintext: true
    }

    const [tabPropertiesMap, setTabPropertiesMap] = useState<Map<string, TabProps>>(initialTabProps)
    const [controlProps, setControlProps] = useState<FormControlProps>(initialControlPropsProps)
    const {control, handleSubmit, reset, setValue} = useForm<IFormUserDetailProps>(
        {
            defaultValues: initialFormUserDetailProps,
            mode: "onChange"
        }
    );
    const {isReset, tabId: activeTab, isEdit} = useTypedSelector(state => state.userInfoReducer.formUpdateData)
    const {client: {name: userName}} = useTypedSelector(getAuthUser)
    const dispatch = useTypedDispatch();

    const initProperties = () => {
        tab.properties.forEach(
            prop => tabPropertiesMap.set(prop.property.formLabel, {name: prop.property.name,comment: prop.property.comment, data: prop.infos})
        );
        setTabPropertiesMap(tabPropertiesMap)
        setValue("firstName", tabPropertiesMap.get(UserInfoProperty.firstName)?.data[0].data || '');
        setValue("secondName", tabPropertiesMap.get(UserInfoProperty.secondName)?.data[0].data || '');
        setValue("patronymic", tabPropertiesMap.get(UserInfoProperty.patronymic)?.data[0].data || '');
        setValue("phoneNumbers", tabPropertiesMap.get(UserInfoProperty.phoneNumbers)?.data[0].data || '');
        setValue("emails", tabPropertiesMap.get(UserInfoProperty.emails)?.data[0].data || '');
        setValue("login", tabPropertiesMap.get(UserInfoProperty.login)?.data[0].data || '');
    };

    useEffect(() => {
        initProperties();
    },[])

    useEffect(() => {
        if (isReset) {
            if (Number(activeTab) === tab.id) {
                reset({firstName: tabPropertiesMap.get(UserInfoProperty.firstName)?.data[0].data || '',
                             secondName: tabPropertiesMap.get(UserInfoProperty.secondName)?.data[0].data || '',
                             patronymic: tabPropertiesMap.get(UserInfoProperty.patronymic)?.data[0].data || '',
                             phoneNumbers: tabPropertiesMap.get(UserInfoProperty.phoneNumbers)?.data[0].data || '',
                             emails: tabPropertiesMap.get(UserInfoProperty.emails)?.data[0].data || '',
                             login: tabPropertiesMap.get(UserInfoProperty.login)?.data[0].data || ''});
                dispatch(tabUserInfoSetReset(false));
            }
        }

    },[isReset])

    useEffect(() => {
        if (isEdit) {
            if (Number(activeTab) === tab.id) {
                setControlProps({readOnly: false, plaintext: false})
            }
        }else{
            setControlProps({readOnly: true, plaintext: true})
        }

    },[isEdit])

    const onSubmitHandler: SubmitHandler<IFormUserDetailProps> = async (entity) => {
        // console.log(entity)
        // console.log(tabPropertiesMap)
        let userInfo: IUserInfo[] = [];
        if(Number(activeTab) === tab.id){
            const fieldNames = [UserInfoProperty.firstName, UserInfoProperty.secondName, UserInfoProperty.patronymic,
                UserInfoProperty.phoneNumbers, UserInfoProperty.emails, UserInfoProperty.login];
            for (const fieldName of fieldNames) {
                const info = tabPropertiesMap.get(fieldName);
                const entityElement = entity[fieldName];
                if(info && entityElement){
                    if(info.data[0].data !== entityElement){
                        userInfo.push({id: info.data[0].id, data: entityElement, modifyUserId: userName})
                    }
                }
            }
            await dispatch(updateUserInfo({useId: userId, infos: userInfo} as IUserInfoContainerRequest));
            // const container = {useId: userId, infos: userInfo} as IUserInfoContainerRequest
                    // console.log(container)

        }

    }

    return (
        <UserDetailsBody tabProperties={tabPropertiesMap} controlProps={controlProps} onSubmit={onSubmitHandler}
                         useFormReturn={{control, handleSubmit} as UseFormReturn<IFormUserDetailProps>}/>
    )

};

export default UserDetailsBodyContainer;