import React from 'react';
import {Accordion, Col, Container, Form, Row} from "react-bootstrap";
import {IUserTabProperty} from "../../../models/IUser";
import {UserInfoProperty} from "../../../utils/constants";

interface UserDetailsBodyProps {
    tabProperties: IUserTabProperty[];
}

const UserDetailsBody: React.FC<UserDetailsBodyProps> = ({tabProperties}) => {
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
            <Container className={"row"}>
                <Form as={Col} className="col-6">
                    <Form.Group as={Row} className={'mb-3'} controlId="formFirstName">
                        <Form.Label column sm="4">
                            {tabProperties[UserInfoProperty.firstName].property.name}
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly
                                          defaultValue={tabProperties[UserInfoProperty.firstName].infos[0].data || "Фамилия"}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className={'mb-3'} controlId="formLogin">
                        <Form.Label column sm="4">
                            {tabProperties[UserInfoProperty.secondName].property.name}
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly
                                          defaultValue={tabProperties[UserInfoProperty.secondName].infos[0].data || "Логин"}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className={'mb-3'} controlId="formLogin">
                        <Form.Label column sm="4">
                            {tabProperties[UserInfoProperty.patronymic].property.name}
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly
                                          defaultValue={tabProperties[UserInfoProperty.patronymic].infos[0].data || "Логин"}
                            />
                        </Col>
                    </Form.Group>

                </Form>
                <Form as={Col} className="col-6">
                    <Form.Group as={Row} className={'mb-3'} controlId="formFirstName">
                        <Form.Label column sm="4">
                            {tabProperties[UserInfoProperty.login].property.name}
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly
                                          defaultValue={tabProperties[UserInfoProperty.login].infos[0].data || "Логин"}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className={'mb-3'} controlId="formLogin">
                        <Form.Label column sm="4">
                            {tabProperties[UserInfoProperty.phoneNumbers].property.name}
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly
                                          defaultValue={tabProperties[UserInfoProperty.phoneNumbers].infos[0].data || "Телефон"}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className={'mb-3'} controlId="formLogin">
                        <Form.Label column sm="4">
                            {tabProperties[UserInfoProperty.emails].property.name}
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly
                                          defaultValue={tabProperties[UserInfoProperty.emails].infos[0].data || "Элекронная почта"}
                            />
                        </Col>
                    </Form.Group>

                </Form>
            </Container>
        </Accordion.Body>
    );
};

export default UserDetailsBody;