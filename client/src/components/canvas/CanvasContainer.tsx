import React, {useCallback} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hook/useTypedSelector";
import {getCanvas} from "../../store/endpoints/admin";
import {adminAction} from "../../store/reducers/AdminSlice";
import {useNavigate} from "react-router-dom";
import {Components, Routs} from "../../utils/routs";
import Canvas from "./Canvas";

const CanvasContainer = () => {
    const {items, isActiveCanvas} = useTypedSelector(getCanvas)
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()

    const handleClose = useCallback(() => dispatch(adminAction.setActiveCanvas()), []);
    const handleSelectItem = useCallback(
        (id:number) => {
            dispatch(adminAction.setActive(id));
            navigate(Routs.ADMIN_ROUT);
            switch (id) {
                case Components.ADMIN_USER_NAMES_COMPONENT:
                    navigate(Routs.ADMIN_USER);
                    break;
                case Components.ADMIN_MEDIA_NAMES_COMPONENT:
                    navigate(Routs.ADMIN_MEDIA);
                    break;
            }
        }, []
    );
    return (
        <Canvas items={items} isActiveCanvas={isActiveCanvas} handleClose={handleClose} handleSelectItem={handleSelectItem}/>
    );
};

export default CanvasContainer;