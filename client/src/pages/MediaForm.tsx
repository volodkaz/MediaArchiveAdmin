import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";

const MediaForm: FC = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    TYPES
                </Col>
                <Col md={9}>
                    MEDIA
                </Col>
            </Row>
        </Container>
    );
};

export default MediaForm;