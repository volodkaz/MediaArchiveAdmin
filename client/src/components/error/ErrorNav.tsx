import React from 'react';
import {Alert} from "react-bootstrap";
import {ErrorNavProps} from "../../models/store/error";

const ErrorNav: React.FC<ErrorNavProps> = React.memo(({error, isShow, onCloseHandler}) => {
    return (
            <Alert variant={'danger'} onClose={onCloseHandler} dismissible show={isShow}>
                <Alert.Heading className={'d-flex justify-content-center'}>Ошибка!!!</Alert.Heading>
                {error.message}
            </Alert>
    );
});

export default ErrorNav;