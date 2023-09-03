import React, {FC} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {ListGroup} from "react-bootstrap";
import {CanvasProps} from "../../models/canvas";
import CanvasItem from "./CanvasItem";

const Canvas: FC<CanvasProps> = React.memo(
    ({items, isActiveCanvas, handleClose, handleSelectItem}) => {
        return (
            <>
                <Offcanvas show={isActiveCanvas}   onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Меню Администратора</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ListGroup>
                            {items && items.map(item =>
                                <CanvasItem key={item.id} item={item} adminVoid={handleSelectItem}/>
                                )
                            }
                        </ListGroup>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }
);

export default Canvas;