import React from 'react';
import {Button, ButtonGroup, Container, Spinner} from 'react-bootstrap';
import {UserContentProps} from "../../../models/component/admin";
import AccordionList from "../../AccordionList";
import {IUserTab} from "../../../models/IUser";
import AccordionItem, {IAccordionItem} from "../../AccordionItem";
import UserAccordionBody from "./UserAccordionBody";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";

export interface IUserAccordionItem extends IAccordionItem {

}

const UserContent: React.FC<UserContentProps> = ({tabs, activeTab, setActive, deleteTabHandler,
                                                     isLoading, editTabHandler, addTabHandler, saveTabHandler, activeUserId}) => {

    return (
        <Container className={'border border-2 rounded-2 adminNameCol'}>
            { isLoading && <Spinner animation={"grow"}/> }
            <ButtonGroup aria-label="Basic example" className={'d-flex justify-content: center'}>
                <Button variant="outline-primary"
                        onClick={addTabHandler}
                        disabled={activeUserId === 0}
                >
                    Создать вкладку
                </Button>
                <Button variant="outline-primary"
                        onClick={editTabHandler}
                        disabled={!activeTab}
                >
                    Изменить вкладка
                </Button>
                <Button variant="outline-primary"
                        onClick={() => {
                            if(activeTab){
                                deleteTabHandler(Number(activeTab));
                            }
                        }}
                        disabled={!activeTab}
                >
                    Удалить влкладку
                </Button>
            </ButtonGroup>
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
                                    item: <UserAccordionBody tab={tabItem}/>
                                }
                            }
                            key={tabItem.id}
                        />
                }
            />
        </Container>
    );
};

export default UserContent;