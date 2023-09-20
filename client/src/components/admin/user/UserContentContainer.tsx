import React, {useCallback, useEffect, useState} from 'react';
import UserContent, {IUserAccordionItem} from "./UserContent";
import {UserContentContainerProps} from "../../../models/component/admin";
import {useTypedDispatch, useTypedSelector} from "../../../hook/useTypedSelector";
import {getUserInfo, isEqualsUsersInfo, isUserInfoLoading} from "../../../store/endpoints/userInfo";
import {tabInitialState} from "../../../models/IUser";
import {deleteUserInfo, fetchUserInfo} from "../../../store/actions/UserInfoAction";
import CreateUserInfoTabContainer from "../../modal/userinfo/CreateUserInfoTabContainer";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";

const UserContentContainer: React.FC<UserContentContainerProps> = ({userId, login}) => {
    console.log('UserContentContainer')
    const [activeTab, setActiveTab] = useState<AccordionEventKey>(null);
    const tabs = useTypedSelector(getUserInfo)
    const isLoading = useTypedSelector(isUserInfoLoading)
    const [isShowCreateUserTabModal, setShowCreateUserTabModal] = useState(false);

    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchUserInfo(userId))
    }, [userId])

    const setActiveTabHandler = useCallback((event: AccordionEventKey) => {

        setActiveTab(event)
    }, []);
    const removeTabHandler = useCallback((id : number) => {
        console.log(activeTab)
        dispatch(deleteUserInfo(Number(activeTab)))
    }, [activeTab]);
    const editTabHandler = useCallback(() => {
        console.log(activeTab)
        // dispatch(deleteUserInfo)
    }, [activeTab]);
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
                         isLoading={isLoading} editTabHandler={editTabHandler} addTabHandler={addTabHandler} saveTabHandler={saveTabHandler}
                         activeUserId={userId}
            />
            <CreateUserInfoTabContainer show={isShowCreateUserTabModal} setShow={setShowCreateUserTabModal} userId={userId}/>
        </div>
    );
};

export default UserContentContainer;