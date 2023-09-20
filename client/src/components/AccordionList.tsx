import React from 'react';
import {Accordion, AccordionProps} from 'react-bootstrap';
import {IUserInfoItemProperty} from "../models/IUser";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";


export interface IAccordionList<T extends IUserInfoItemProperty>{
    tabs: T[];
    renderType: (item: T) => React.ReactNode;
    props?: AccordionProps;
}

function AccordionList<T extends IUserInfoItemProperty>(props : IAccordionList<T>){

    return (
        <Accordion {...props.props}>
            {props.tabs.length > 0 ? props.tabs.filter(tab => tab.id).map(props.renderType) : <div></div>}
        </Accordion>

    );
};

export default AccordionList;