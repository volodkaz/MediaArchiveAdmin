import React, {FC} from 'react';
import './style/LoginForm.css'
import {IUserRequest} from "../models/request/IUserRequest";
import {useTypedDispatch, useTypedSelector} from "../hook/useTypedSelector";
import {loginUser, registerUser} from "../store/actions/authAction";
import {Button, Card, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Navigate, NavLink, useLocation} from "react-router-dom"
import {isRegisterForm, Routs} from "../utils/routs";
import {Formik} from 'formik';
import FormGroupChecked from "../components/FormGroupChecked";
import {validationLoginSchema, validationRegistrationSchema} from "../utils/validators";
import {UserAuthValidatorProps} from "../models/validators/ValidatorsType";
import {getAuth} from "../store/endpoints/auth";



const LoginForm: FC = () => {
    const location = useLocation();
    const {user, isLoading} = useTypedSelector(getAuth)
    const dispatch = useTypedDispatch()


    const initialValues:UserAuthValidatorProps = {
        login: '',
        password:  '',
        checkPassword: ''
    };

    const clickHandler = async (values: UserAuthValidatorProps) => {
        if(isRegisterForm(location)){
            await dispatch(registerUser({login: values.login, secret: values.password} as IUserRequest))
        }else{
            await dispatch(loginUser({login: values.login, secret: values.password} as IUserRequest))
        }
    }

    if(isLoading){
        return (<Spinner animation={"grow"}/>)
    }

    if(user.isAuth){
        return (
            <Navigate to={Routs.ADMIN_ROUT} replace={true} />
        )
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isRegisterForm(location) ? 'Регистрация' : 'Авторизация'}</h2>
                <Formik initialValues={initialValues}
                        validationSchema={isRegisterForm(location) ?
                            validationRegistrationSchema :
                            validationLoginSchema}
                        onSubmit={console.log}>
                    {({values, isValid}) => (

                        <Form className="d-flex flex-column">
                            <FormGroupChecked
                                className={'mt-3'}
                                name={'login'}
                                type={'text'}
                                placeholder={'Введите имя пользователя'}
                            />
                            <FormGroupChecked
                                className={'mt-3'}
                                name={'password'}
                                type={'password'}
                                placeholder={'Введите пароль'}
                            />
                            {isRegisterForm(location) &&
                                <FormGroupChecked
                                    className={'mt-3'}
                                    name={'checkPassword'}
                                    type={'password'}
                                    placeholder={'Повторите пароль'}
                                />
                            }

                            <Row className="d-flex justify-content-between align-self-stretch mt-3  pr-3" >
                                <Col className={'d-flex justify-content-start col-9'}>
                                    {isRegisterForm(location) ?
                                        <div>
                                            Есть аккаунт? <NavLink to={Routs.LOGIN_ROUT}>Войди</NavLink>
                                        </div>
                                        :
                                        <div>
                                            Нет аккаунта? <NavLink to={Routs.REGISTRATION_ROUT}>Зарегистрируйся</NavLink>
                                        </div>
                                    }
                                </Col>
                                <Col className={'d-flex justify-content-end col-3'}>
                                    <Button
                                        disabled={!isValid
                                            || !values.login
                                            || !values.password
                                            || (isRegisterForm(location)
                                                && !values.checkPassword)}
                                        variant={'outline-success'}
                                        onClick={() => clickHandler(values)}
                                    >
                                        {isRegisterForm(location) ? 'Регистрация' : 'Войти'}
                                    </Button>
                                </Col>

                            </Row>
                        </Form>
                    )
                    }
                </Formik>
            </Card>
        </Container>
    );
};

export default LoginForm;