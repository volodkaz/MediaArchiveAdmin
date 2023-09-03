import React from 'react';
import {Button, ListGroup} from "react-bootstrap";
import {IItemProps} from "../models/index";

interface ItemProps<T extends IItemProps>{
    item: T;
    props?: {};
    isActive: boolean;
    setActive: (item: T) => void;
    deleteItem: (id: string) => void;
}

export default function Item<T extends IItemProps>(props: ItemProps<T>){

    function handleSelectItem(){
        props.setActive(props.item);
    }

    function deleteHandler(e: React.MouseEvent){
        e.stopPropagation()
        props.deleteItem(props.item.id)
    }
    return (
            <ListGroup.Item
                {...props.props}
                onClick={( e:React.MouseEvent) => handleSelectItem()}
                active={props.isActive}
                key={props.item.id}
            >
                <div className={'d-flex justify-content-between'}>{props.item.id}
                <Button
                    onClick={deleteHandler}
                    variant={"outline-info"}
                    className={'itemButton d-flex justify-content-center align-items-center'}
                >
                    -
                </Button>
                </div>
            </ListGroup.Item>
    );
};