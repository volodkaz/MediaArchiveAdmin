import React from 'react';
import {Accordion, Container} from "react-bootstrap";

interface UserNoteBodyProps{
    data: string;
}
const UserNoteBody: React.FC<UserNoteBodyProps> = ({data}) => {
    return (
        <Accordion.Body>
            <Container className={"row"}>
                <Container
                    className={"d-flex justify-content-center align-items-center col-6 border border-2 rounded-2"}>
                    <h3>Данные</h3><br/>
                </Container>
                <Container
                    className={"d-flex justify-content-center align-items-center col-6 border border-2 rounded-2"}>
                    <h3>{data}</h3><br/>
                </Container>
            </Container>
        </Accordion.Body>
    );
};

export default UserNoteBody;