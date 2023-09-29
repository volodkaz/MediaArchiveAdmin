import React from 'react';
import {Container, Spinner} from 'react-bootstrap';
import {UserContentProps} from "../../../models/component/admin";
import AccordionList from "../../AccordionList";
import {IUserTab} from "../../../models/IUser";
import AccordionItem, {IAccordionItem} from "../../AccordionItem";
import UserAccordionBody from "./UserAccordionBody";

export interface IUserAccordionItem extends IAccordionItem {

}

const UserContent: React.FC<UserContentProps> = ({tabs, setActive,
                                                     isLoading, activeUserId} ) => {

    return (
        <Container className={'border border-2 rounded-2 adminNameCol'}>
            { isLoading && <Spinner animation={"grow"}/> }
            <AccordionList<IUserTab>
                props={
                    {
                        onSelect: event => setActive(event)
                    }
                }
                tabs={tabs}
                renderType={
                    (tabItem) =>
                        <AccordionItem<IUserAccordionItem>
                            tab={
                                {
                                    id: tabItem.id,
                                    type: tabItem.tab.id,
                                    name: tabItem.name,
                                    item: <UserAccordionBody tab={tabItem} userId={activeUserId}/>
                                }
                            }
                            key={tabItem.id}
                        />
                }
            />
        </Container>
    );
}

export default UserContent;