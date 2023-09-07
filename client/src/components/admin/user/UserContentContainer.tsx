import React, {useCallback, useEffect, useState} from 'react';
import UserContent, {IUserAccordionItem} from "./UserContent";
import {UserContentContainerProps} from "../../../models/component/admin";
import {useTypedDispatch, useTypedSelector} from "../../../hook/useTypedSelector";
import {getUserInfo, isEqualsUsersInfo, isUserInfoLoading} from "../../../store/endpoints/userInfo";
import {tabInitialState} from "../../../models/IUser";
import {fetchUserInfo} from "../../../store/actions/UserInfoAction";
import CreateUserInfoTabContainer from "../../modal/userinfo/CreateUserInfoTabContainer";

const UserContentContainer: React.FC<UserContentContainerProps> = ({userId, login}) => {
    console.log('UserContentContainer')
    const [activeTab, setActiveTab] = useState<IUserAccordionItem>(tabInitialState);
    const tabs = useTypedSelector(getUserInfo)
    const isLoading = useTypedSelector(isUserInfoLoading)
    const [isShowCreateUserTabModal, setShowCreateUserTabModal] = useState(false);

    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchUserInfo(userId))
    }, [userId])

    const setActiveTabHandler = useCallback((tab: IUserAccordionItem) => setActiveTab(tab), []);
    const removeTabHandler = useCallback((id : number) => {
        // dispatch(deleteUserInfo)
    }, []);
    const editTabHandler = useCallback(() => {
        // dispatch(deleteUserInfo)
    }, []);
    const addTabHandler = useCallback(() => {
        setShowCreateUserTabModal(true)
        // dispatch(deleteUserInfo)
    }, []);
    const saveTabHandler = useCallback((tab : IUserAccordionItem) => {
        // dispatch(deleteUserInfo)
    }, []);

    return (
        <div className={'container-fluid'}>
            <UserContent tabs={tabs} setActive={setActiveTabHandler} activeTab={activeTab} deleteTabHandler={removeTabHandler}
                         isLoading={isLoading} editTabHandler={editTabHandler} addTabHandler={addTabHandler} saveTabHandler={saveTabHandler}/>
            <CreateUserInfoTabContainer show={isShowCreateUserTabModal} setShow={setShowCreateUserTabModal}/>
        </div>
    );
};

export default UserContentContainer;