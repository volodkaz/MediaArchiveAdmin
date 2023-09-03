import React, {FC, useState} from 'react';
import {initialProps, RoleItemProps, RoleValidatorProps} from "./roleTypes";
import {Button, Col, Row} from "react-bootstrap";
import FormGroupChecked from "../../FormGroupChecked";
import {Formik, FormikState} from 'formik';
import {validationCreateRoleModalForm} from "../../../utils/validators";

const RoleItem: FC<RoleItemProps> = ({role}) => {

    const [disabled, setDisabled] = useState<boolean>(true)

    const editRoleHandler = (resetForm:   (nextState?: (Partial<FormikState<RoleValidatorProps>> | undefined)) => void) => {
        setDisabled(!disabled)
        if(!disabled){
            resetForm({values:initialProps})
        }
    }
    return (
        <Formik initialValues={initialProps}
                validationSchema={validationCreateRoleModalForm}
                onSubmit={console.log}
                // onReset={() => console.log('reset')}
        >
            {({values, isValid, resetForm}) => (
        <Row key={role.roleId} className={'d-flex align-items-center'}>
            <Col className={'col-md-3'}>{role.roleId}</Col>
            <Col className={'col-md-6'}>
                <FormGroupChecked
                    className={'my-1'}
                    name={'role'}
                    type={'text'}
                    disabled={disabled}
                    placeholder={role.comment}
                    title={role.comment}
                />
            </Col>
            <Col className={'col-md-3'}>
                <Button
                    type={"reset"}
                    variant={'outline-light'}
                    className={'ml-1'}
                    onClick={() => editRoleHandler(resetForm)}
                >
                    Ред
                </Button>
                <Button>
                    -
                </Button>
            </Col>
        </Row>
            )}
        </Formik>
    );
};

export default RoleItem;