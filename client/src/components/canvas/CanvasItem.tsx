import React, {FC} from 'react';
import {ListGroup} from "react-bootstrap";
import "../style/CanvasItem.css"
import {CanvItemProps} from "../../models/canvas";


const CanvasItem: FC<CanvItemProps> = ({item, adminVoid}) => {
    return (
        <ListGroup.Item
            style={{cursor: 'pointer'}}
            onClick={(e:React.MouseEvent) => {adminVoid(item.id)}}
            active={item.isActive}
        >
            {item.id}.{item.title}
        </ListGroup.Item>
    );
};

export default CanvasItem;