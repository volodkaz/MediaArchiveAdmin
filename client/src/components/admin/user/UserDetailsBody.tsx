import React from 'react';
import {Accordion, Col, Container, Form, Row} from "react-bootstrap";
import {UserInfoProperty} from "../../../utils/constants";
import {FormControlProps} from "react-bootstrap/FormControl";
import {UseFormReturn} from "react-hook-form/dist/types/form";
import {IFormUserDetailProps, TabProps} from "./UserDetailsBodyContainer";
import {SubmitHandler} from "react-hook-form";
import FormControlRequired from "../../FormControlRequired";

interface UserDetailsBodyProps {
    tabProperties: Map<String, TabProps>;
    controlProps: FormControlProps;
    onSubmit: SubmitHandler<IFormUserDetailProps>;
    // onSubmit: (entity: FormEvent<HTMLFormElement>) => void;
    useFormReturn: UseFormReturn<IFormUserDetailProps>;
}

const UserDetailsBody: React.FC<UserDetailsBodyProps> = ({tabProperties, controlProps, onSubmit, useFormReturn}) => {

    return (
        <Accordion.Body>
            <Container className={"row"}>
                <Container
                    className={"d-flex justify-content-center align-items-center col-6 border border-2 rounded-2"}>
                    <h3>ФИО</h3><br/>
                </Container>
                <Container
                    className={"d-flex justify-content-center align-items-center col-6 border border-2 rounded-2"}>
                    <h3>Учётные данные</h3><br/>
                </Container>
            </Container>

                <Form  id={"formBodyUserData"} onSubmit={useFormReturn.handleSubmit(onSubmit)}>
                    <Container className={"row"}>
                    <Container as={Col} className="col-6">
                    <Form.Group as={Row} className={'mb-3'} controlId="formDetailFirstName">
                        <Form.Label column sm="4">
                            {tabProperties.get(UserInfoProperty.firstName)?.name || ""}
                        </Form.Label>
                        <Col sm="8">
                            <FormControlRequired
                                controlProps={controlProps}
                                tooltipText={tabProperties.get(UserInfoProperty.firstName)?.comment}
                                errorMessage={'Поле обязательно для заполнения'}
                                props={
                                    {control: useFormReturn.control,
                                        name: UserInfoProperty.firstName,
                                        defaultValue: tabProperties.get(UserInfoProperty.firstName)?.data[0].data || 'aaaaaaaa',
                                        rules: {required: true}
                                    }
                                }
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className={'mb-3'} controlId="formDetailSecondName">
                        <Form.Label column sm="4">
                            {tabProperties.get(UserInfoProperty.secondName)?.name}
                        </Form.Label>
                        <Col sm="8">
                            <FormControlRequired
                                controlProps={controlProps}
                                tooltipText={tabProperties.get(UserInfoProperty.secondName)?.comment}
                                props={
                                    {control: useFormReturn.control,
                                        name: UserInfoProperty.secondName,
                                        defaultValue: tabProperties.get(UserInfoProperty.secondName)?.data[0].data
                                    }
                                }
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className={'mb-3'} controlId="formDetailPatronymic">
                        <Form.Label column sm="4">
                            {tabProperties.get(UserInfoProperty.patronymic)?.name}
                        </Form.Label>
                        <Col sm="8">
                            <FormControlRequired
                                controlProps={controlProps}
                                tooltipText={tabProperties.get(UserInfoProperty.patronymic)?.comment}
                                props={
                                    {control: useFormReturn.control,
                                        name: UserInfoProperty.patronymic,
                                        defaultValue: tabProperties.get(UserInfoProperty.patronymic)?.data[0].data
                                    }
                                }
                            />
                        </Col>
                    </Form.Group>
                    </Container>

                <Container as={Col} className="col-6">
                    <Form.Group as={Row} className={'mb-3'} controlId="formDetailLogin">
                        <Form.Label column sm="4">
                            {tabProperties.get(UserInfoProperty.login)?.name}
                        </Form.Label>
                        <Col sm="8">
                            <FormControlRequired
                                controlProps={controlProps}
                                tooltipText={tabProperties.get(UserInfoProperty.login)?.comment}
                                props={
                                    {control: useFormReturn.control,
                                        name: UserInfoProperty.login,
                                        defaultValue: tabProperties.get(UserInfoProperty.login)?.data[0].data
                                    }
                                }
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className={'mb-3'} controlId="formDetailPhoneNumber">
                        <Form.Label column sm="4">
                            {tabProperties.get(UserInfoProperty.phoneNumbers)?.name}
                        </Form.Label>
                        <Col sm="8">
                            <FormControlRequired
                                controlProps={controlProps}
                                tooltipText={tabProperties.get(UserInfoProperty.phoneNumbers)?.comment}
                                props={
                                    {control: useFormReturn.control,
                                        name: UserInfoProperty.phoneNumbers,
                                        defaultValue: tabProperties.get(UserInfoProperty.phoneNumbers)?.data[0].data
                                    }
                                }
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className={'mb-3'} controlId="formDetailEMail">
                        <Form.Label column sm="4">
                            {tabProperties.get(UserInfoProperty.emails)?.name}
                        </Form.Label>
                        <Col sm="8">
                            <FormControlRequired
                                controlProps={controlProps}
                                props={
                                    {control: useFormReturn.control,
                                        name: UserInfoProperty.emails,
                                        defaultValue: tabProperties.get(UserInfoProperty.emails)?.data[0].data
                                    }
                                }
                                tooltipText={tabProperties.get(UserInfoProperty.emails)?.comment}
                            />
                        </Col>
                    </Form.Group>

                </Container>
                    </Container>
                </Form>

        </Accordion.Body>
    );
};

export default UserDetailsBody;