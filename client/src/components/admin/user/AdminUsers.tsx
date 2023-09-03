import React, {FC} from 'react';
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import {IUser} from "../../../models/IUser";
import Item from "../../Item";
import List from "../../List";
import CreateUserContainer from "../../modal/user/CreateUserContainer";
import CreateNewRole from "../../modal/role/CreateNewRole";
import {AdminUsersProps} from "../../../models/component/admin";
import UserContentContainer from "./UserContentContainer";

const AdminUsers: FC<AdminUsersProps> = ({users,activeUser, roles, isLoading, createUserHandlerVisible,
                                         createRoleHandlerVisible, setActiveUserHandler, removeUserHandler, isCreateUserModalVisible,
                                         onHideCreateUserHandler, isManageRolesModalVisible, onHideManageRoleHandler}) => {

    return (
        <Container className={'border border-2 rounded-2 pb-2'} fluid={true}>
            { isLoading && <Spinner animation={"grow"}/> }
                <Row className={'adminNameRow'}>

                    <Col md={3} className={'d-flex align-items-stretch'}>
                        <Container className={'d-flex flex-column border border-2 rounded-2 adminNameCol align-items-center' }>

                            <Container className={'d-flex flex-column align-items-center my-2'}>
                                <h4>Пользователи</h4>
                                <Button
                                    className={'itemCreateButton w-100'}
                                    variant={'outline-secondary'}
                                    onClick={createUserHandlerVisible}
                                >
                                    Создать пользователя
                                </Button>
                                <Button
                                    className={'itemCreateButton w-100 mt-2'}
                                    variant={'outline-secondary'}
                                    onClick={createRoleHandlerVisible}
                                >
                                    Редактор ролей
                                </Button>
                            </Container>
                            <List<IUser>
                                props={{className: 'd-flex w-auto align-self-stretch'}}
                                items={users}
                                renderType={(user: IUser) =>
                                    <Item item={user}
                                          isActive={user.id === activeUser.id}
                                          setActive={setActiveUserHandler}
                                          deleteItem={removeUserHandler}
                                          key={user.id}
                                    />}
                            />
                        </Container>
                    </Col>


                    <Col md={9} className={'d-flex align-items-stretch'}>
                        <UserContentContainer userId={Number(activeUser.id)} login={activeUser.name}/>
                    </Col>
                </Row>

            <CreateUserContainer show={isCreateUserModalVisible}
                                 onHide={onHideCreateUserHandler}
                                 setActive={setActiveUserHandler}
                                 roles={roles}/>
            <CreateNewRole show={isManageRolesModalVisible} onHide={onHideManageRoleHandler}/>
        </Container>
    );
};

export default AdminUsers;