import React from 'react';
import {IItemProps} from "../models/index";
import {Accordion} from "react-bootstrap";

export interface IAccordionItem extends IItemProps{
    type: number;
    item: React.ReactNode;
}

export interface AccordionItemProps<T extends IAccordionItem>{
    tab: T;
}

function AccordionItem<T extends IAccordionItem>(props: AccordionItemProps<T>) {

    return (
        <Accordion.Item eventKey={String(props.tab.id)}>
            <Accordion.Header>{props.tab.name}</Accordion.Header>
            {props.tab.item}
        </Accordion.Item>
    );
}

export default AccordionItem;