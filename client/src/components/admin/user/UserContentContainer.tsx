import React, {useCallback, useEffect, useState} from 'react';
import UserContent from "./UserContent";
import {UserContentContainerProps} from "../../../models/component/admin";
import {useTypedDispatch, useTypedSelector} from "../../../hook/useTypedSelector";
import {getUserInfo, isUserInfoLoading} from "../../../store/endpoints/userInfo";
import {deleteUserInfo, fetchUserInfo} from "../../../store/actions/UserInfoAction";
import CreateUserInfoTabContainer from "../../modal/userinfo/CreateUserInfoTabContainer";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";
import ButtonGroupWithAttach from "../../ButtonGroupWithAttach";
import {tabUserInfoFormSetEdit, tabUserInfoSetActive, tabUserInfoSetReset} from "../../../store/reducers/UserInfoSlice";

const UserContentContainer: React.FC<UserContentContainerProps> = ({userId, login}) => {
    console.log('UserContentContainer')
    const tabs = useTypedSelector(getUserInfo)
    const isLoading = useTypedSelector(isUserInfoLoading)
    const [isShowCreateUserTabModal, setShowCreateUserTabModal] = useState(false);
    const {isEdit, tabId: activeTab} = useTypedSelector(state => state.userInfoReducer.formUpdateData)

    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchUserInfo(userId))
    }, [userId])

    const setActiveTabHandler = useCallback((event: AccordionEventKey) => {
        dispatch(tabUserInfoSetActive(event))
        dispatch(tabUserInfoFormSetEdit(false))
    }, []);
    const removeTabHandler = useCallback((id: number) => {
        dispatch(deleteUserInfo(Number(activeTab)))
    }, [activeTab]);
    const editTabHandler = useCallback(() => {
        dispatch(tabUserInfoFormSetEdit(!isEdit))
    }, [isEdit]);
    const addTabHandler = useCallback(() => {
        setShowCreateUserTabModal(true)
    }, []);

    const cancelEditTabHandler = useCallback(() => {
        dispatch(tabUserInfoSetReset(true))
    }, []);

    return (

        <ButtonGroupWithAttach
            activeTab={activeTab || 0}
            activeUserId={userId}
            addTabHandler={addTabHandler}
            editTabHandler={editTabHandler}
            deleteTabHandler={removeTabHandler}
            isHideSaveButtonGroup={!isEdit}
            formId={'formBodyUserData'}
            resetTabHandler={cancelEditTabHandler}
            renderProps={
                <div className={'container-fluid'}>
                    <UserContent tabs={tabs} setActive={setActiveTabHandler}
                                 isLoading={isLoading} activeUserId={userId}
                    />
                    <CreateUserInfoTabContainer show={isShowCreateUserTabModal} setShow={setShowCreateUserTabModal}
                                                userId={userId}/>
                </div>
            }
        />
    );
};

export default UserContentContainer;