import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import './style/AdminPage.css'
import {Outlet} from 'react-router-dom';
import CanvasContainer from "../components/canvas/CanvasContainer";

interface AdminProps{
}
const AdminPage : FC<AdminProps> = () => {
    console.log('adminPage')
    return (
            <Container fluid={true}>
                <CanvasContainer/>
                <Outlet/>
            </Container>
    );
};

export default AdminPage;