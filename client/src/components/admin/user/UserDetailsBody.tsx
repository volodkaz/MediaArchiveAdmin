import React from 'react';
import {Accordion, Container, FormLabel} from "react-bootstrap";
import {IUserTabProperty} from "../../../models/IUser";
import {UserInfoProperty} from "../../../utils/constants";

interface UserDetailsBodyProps{
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
                <Container className={"col-2"}>
                    <FormLabel>{tabProperties[UserInfoProperty.firstName].name}</FormLabel>
                </Container>
                <Container className={"col-4"}>
                    {tabProperties[UserInfoProperty.firstName].infos[0].data || "Фамилия"}
                </Container>
                <Container className={"col-2"}>
                    <FormLabel>{tabProperties[UserInfoProperty.login].name}</FormLabel>
                </Container>
                <Container className={"col-4"}>
                    {tabProperties[UserInfoProperty.login].infos[0].data}
                </Container>
            </Container>
            <Container className={"row"}>
                <Container className={"col-2"}>
                    <FormLabel>{tabProperties[UserInfoProperty.secondName].name}</FormLabel>
                </Container>
                <Container className={"col-4"}>
                    {tabProperties[UserInfoProperty.secondName].infos[0].data || "Имя"}
                </Container>
                <Container className={"col-2"}>
                    <FormLabel>{tabProperties[UserInfoProperty.emails].name}</FormLabel>
                </Container>
                <Container className={"col-4"}>
                    {tabProperties[UserInfoProperty.emails].infos[0].data || "Электронная почта"}
                </Container>
            </Container>
            <Container className={"row"}>
                <Container className={"col-2"}>
                    <FormLabel>{tabProperties[UserInfoProperty.patronymic].name}</FormLabel>
                </Container>
                <Container className={"col-4"}>
                    {tabProperties[UserInfoProperty.patronymic].infos[0].data || "Отчество"}
                </Container>
                <Container className={"col-2"}>
                    <FormLabel>{tabProperties[UserInfoProperty.phoneNumbers].name}</FormLabel>
                </Container>
                <Container className={"col-4"}>
                    {tabProperties[UserInfoProperty.phoneNumbers].infos[0].data || "Телефон"}
                </Container>
            </Container>
        </Accordion.Body>
    );
};

export default UserDetailsBody;