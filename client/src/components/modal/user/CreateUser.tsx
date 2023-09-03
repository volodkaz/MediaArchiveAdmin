import {Formik} from 'formik';
import React, {FC} from 'react';
import {Button, Container, Form, Modal} from "react-bootstrap";
import {validationCreateUserModalForm} from "../../../utils/validators";
import FormGroupChecked from "../../FormGroupChecked";
import {CreateUserProps, initialProps} from "./userTypes";

const CreateUser: FC<CreateUserProps> = React.memo(
    ({show, createUser, onHideHandler, addRolesHandler,
         removeRoleHandler, roles, localRoles, setRole, role}) => {

    console.log("createUser")

    return (

        <Formik initialValues={initialProps}
                    validationSchema={validationCreateUserModalForm}
                    onSubmit={() => console.log('submit')}
        >
            {({values, isValid, resetForm}) => (
                <Modal show={show} onHide={onHideHandler} onExit={() => resetForm()} centered={true}>
                    <Modal.Header>
                        <Modal.Title id={"contained-modal-title-vcenter"}>
                            Добавить нового пользователя
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormGroupChecked
                                className={'mt-3'}
                                name={'login'}
                                type={'text'}
                                placeholder={'Введите логин пользователя'}
                            />
                            <FormGroupChecked
                                className={'mt-3'}
                                name={'password'}
                                type={'password'}
                                placeholder={'Введите пароль пользователя'}
                            />
                            <FormGroupChecked
                                className={'mt-3'}
                                name={'checkPassword'}
                                type={'password'}
                                placeholder={'Повторите пароль пользователя'}
                            />
                        </Form>
                            <Container className={'d-flex justify-content-center align-items-center w-100  p-0'} fluid={true}>
                                <Form.Select aria-label="Default select example"
                                             className={'mt-3 me-2'}
                                             onChange={(val) => setRole(Number(val.target.value))}
                                >
                                    <option  className={'text-info'}>Выберите роль</option>
                                    {roles && roles.map(roleByServer =>
                                        <option value={roleByServer.roleId} key={roleByServer.roleId}>{roleByServer.name}</option>
                                    )}
                                </Form.Select>
                                <Button
                                    variant={'outline-success'}
                                    className={'mt-3 ml-2 h-25'}
                                    onClick={() => addRolesHandler(role)}
                                    title={"Добавить роль"}
                                >
                                    +
                                </Button>
                            </Container>
                            {localRoles.length > 0 &&
                                <h5 className={'d-flex justify-content-center align-content-center my-2'}>Выбранные роли</h5>}
                            {localRoles.map(role =>
                                    <Container className={'d-flex justify-content-center align-items-center w-100  p-0'} fluid={true} key={role.roleId}>
                                        <Container className={'d-flex border border-2 rounded-2 me-2 justify-content-between align-items-center p-0' } fluid={true}>
                                            <div className={'mx-2'}>{role.name}</div>
                                            <Button
                                                className={'d-flex p-1 buttonRemRole'}
                                                variant={'outline-secondary'}
                                                onClick={() => removeRoleHandler(role)}
                                                title={"Удалить роль"}
                                            >
                                                -
                                            </Button>
                                        </Container>

                                    </Container>
                                )
                            }

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant={'outline-danger'} onClick={onHideHandler}>Закрыть</Button>
                        <Button variant={'outline-success'}
                                onClick={() => {
                                    createUser(values)
                                }}
                                title={"Создать пользователя"}
                                disabled={!isValid
                                          || !values.login
                                          || !values.password
                                          || !values.checkPassword}
                        >Создать</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Formik>
    );
}
)

export default CreateUser;