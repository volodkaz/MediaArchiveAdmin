import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {ListGroupProps} from "react-bootstrap/ListGroup";
import {IItemProps} from "../models/index";

export interface propsType{
    fluid: boolean;
}

interface ListProps<T extends IItemProps>{
    items: T[];
    renderType: (item: T) => React.ReactNode;
    props?: ListGroupProps;
}

export default function List<T extends IItemProps>(props: ListProps<T>){
    // console.log(props)
    return (
        <ListGroup {...props.props}>
            {props.items.filter(item => item.id).map(props.renderType)}
        </ListGroup>
    );
};