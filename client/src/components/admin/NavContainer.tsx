import React, {useCallback} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hook/useTypedSelector";
import {getAuthUser} from "../../store/endpoints/auth";
import {useNavigate} from "react-router-dom";
import {logoutUser} from "../../store/actions/authAction";
import {IUserIdRequest, IUserRequest} from "../../models/request/IUserRequest";
import {Routs} from "../../utils/routs";
import {logout} from "../../store/reducers/AuthSlice";
import NavComponent from "./Nav";
import {adminAction} from "../../store/reducers/AdminSlice";
import {IUser} from "../../models/IUser";

const NavContainer = () => {
    const user = useTypedSelector(getAuthUser)
    const dispatch = useTypedDispatch()
    const navigate = useNavigate();

    const logoutHandler = useCallback(async (user: IUser) => {
        await dispatch(logoutUser({id: user.id, login: user.name}))
        return navigate(Routs.LOGIN_ROUT);
    }, []);

    const loginGotoHandler = useCallback(() => {
        dispatch(logout('logout'))
        return navigate(Routs.LOGIN_ROUT);
    }, []);

    const openCloseCanvasHandler = useCallback(() => {
        dispatch(adminAction.setActiveCanvas())
    },[]);

    return (
        <NavComponent user={user} logoutHandler={logoutHandler} openCloseCanvasHandler={openCloseCanvasHandler} loginHandler={loginGotoHandler}/>
    );
};

export default NavContainer;