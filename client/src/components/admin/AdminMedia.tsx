import React, {FC} from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";

const AdminMedia: FC = () => {

    return (
        <Container className={'border border-2 rounded-2 pb-2'} fluid={true}>
            {
                <Row className={'adminNameRow'}>

                    <Col md={3} className={'d-flex align-items-stretch'}>
                        <Container className={'d-flex flex-column border border-2 rounded-2 adminNameCol align-items-center' }>

                            <Container className={'d-flex flex-column align-items-center my-2'}>
                                <h4>MEDIA</h4>
                            </Container>


                        </Container>
                    </Col>


                    <Col md={9} className={'d-flex align-items-stretch'}>
                        <Container className={'border border-2 rounded-2 adminNameCol'}>
                            MEDIA_DATA
                        </Container>
                    </Col>

                </Row>

            }
        </Container>
    );
};

export default AdminMedia;