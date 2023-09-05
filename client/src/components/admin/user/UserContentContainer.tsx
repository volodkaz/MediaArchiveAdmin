import React, {useCallback, useEffect, useState} from 'react';
import UserContent, {IUserAccordionItem} from "./UserContent";
import {UserContentContainerProps} from "../../../models/component/admin";
import {useTypedDispatch, useTypedSelector} from "../../../hook/useTypedSelector";
import {getUserInfo, isEqualsUsersInfo, isUserInfoLoading} from "../../../store/endpoints/userInfo";
import {tabInitialState} from "../../../models/IUser";
import {fetchUserInfo} from "../../../store/actions/UserInfoAction";

const UserContentContainer: React.FC<UserContentContainerProps> = ({userId, login}) => {
    console.log('UserContentContainer')
    const [activeTab, setActiveTab] = useState<IUserAccordionItem>(tabInitialState);
    const tabs = useTypedSelector(getUserInfo)
    const isLoading = useTypedSelector(isUserInfoLoading)

    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchUserInfo(userId))
    }, [userId])

    const setActiveTabHandler = useCallback((tab: IUserAccordionItem) => setActiveTab(tab), []);
    const removeTabHandler = useCallback((id : number) => {
        // dispatch(deleteUserInfo)
    }, []);

    return (
        <UserContent tabs={tabs} setActive={setActiveTabHandler} activeTab={activeTab} deleteTab={removeTabHandler} isLoading={isLoading}/>
    );
};

export default UserContentContainer;