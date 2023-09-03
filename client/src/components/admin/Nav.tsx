import React from 'react';
import {Button, Container, Image, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import '../style/Nav.css'
import menuImg from '../../assets/menu_icon.png'
import {NavComponentProps} from "../../models/component/navcomponent";

const NavComponent: React.FC<NavComponentProps> = React.memo(
    ({user, openCloseCanvasHandler, logoutHandler, loginHandler}) => {

        return (

            <Navbar bg="dark" variant="dark">
                {/*<Container bsPrefix={"navbarContainer"} className={"mx-3"}>*/}
                <Container className={"mx-3"} fluid={true}>
                    {user.isAuth && user.client?.isAdmin &&
                        <Nav className={"ml-auto"}>
                            <Button
                                variant={"outline-light"}
                                onClick={openCloseCanvasHandler}
                                id={"menuBtn"}
                            >
                                <Image src={menuImg} className={'btnImg'} fluid={true}/>
                            </Button>
                        </Nav>
                    }
                    {user.isAuth
                        ?
                        <Nav className={"ml-auto"}>

                            {/*<Button variant={"outline-light"}>Админ панель</Button>*/}
                            <Button variant={"outline-light"}
                                    className={'ms-4'}
                                    onClick={logoutHandler}
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ms-auto">
                            <Button variant={"outline-light"}
                            onClick={loginHandler}>
                                Войти
                            </Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        );
    }
);

export default NavComponent;