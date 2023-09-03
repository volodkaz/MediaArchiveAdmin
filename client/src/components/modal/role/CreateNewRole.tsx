import React, {FC} from 'react';
import {Button, Container, Form, Modal} from "react-bootstrap";
import {ModalProps} from "../../../models/modal/Types";
import {useFetchAllRoleItems} from "../../../services/RoleService";
import RoleItem from "./RoleItem";

const CreateNewRole: FC<ModalProps> = ({show, onHide}) => {
    // const {data:roles, isLoading, isError, error} = useFetchAllRoleItems(1)

    const addRolesHandler = () => {}
    const saveRolesHandler = () => {}
    return (

                <Modal show={show} onHide={onHide} centered={true}>
                    <Modal.Header closeButton={true}>
                        <Modal.Title id={"contained-modal-title-vcenter"}>
                            Редактор ролей
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        {/*{roles && roles.map(role =>*/}
                        {/*    <RoleItem key={role.role.name}  role={role.role}/>*/}
                        {/*)}*/}

                            <Container className={'d-flex justify-content-start align-items-center w-100  p-0'} fluid={true}>

                                <Button
                                    variant={'outline-success'}
                                    className={'mt-3 ml-2 h-25'}
                                    onClick={addRolesHandler}
                                    title={"Добавить роль"}
                                >
                                    Добавить новую роль
                                </Button>
                            </Container>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                        <Button variant={'outline-success'}
                                onClick={() => saveRolesHandler()}
                                title={"Сохранить"}
                                // disabled={!isValid}
                        >Создать</Button>
                    </Modal.Footer>
                </Modal>

    );
};

export default CreateNewRole;