import React from 'react';
import {BsPrefixProps} from "react-bootstrap/helpers";
import {Button, ButtonGroup, Container} from "react-bootstrap";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";

interface ButtonGroupWithAttachProps {
    renderProps: React.ReactNode;
    props?: BsPrefixProps;
    addTabHandler: () => void;
    activeUserId: number;
    editTabHandler: () => void;
    deleteTabHandler: (id: number) => void;
    activeTab: number;
    formId:string;
    isHideSaveButtonGroup: boolean;
    resetTabHandler: () => void;
}

const ButtonGroupWithAttach: React.FC<ButtonGroupWithAttachProps> = ({renderProps, activeTab, activeUserId,
                                                                         addTabHandler, deleteTabHandler, editTabHandler, formId,
                                                                         isHideSaveButtonGroup, props, resetTabHandler}) => {
    return (
        <Container>
                <ButtonGroup className={'d-flex justify-content-center px-3'}>
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
                                if (activeTab) {
                                    deleteTabHandler(Number(activeTab));
                                }
                            }}
                            disabled={!activeTab}
                    >
                        Удалить влкладку
                    </Button>
                </ButtonGroup>
            {renderProps && renderProps}
                <ButtonGroup className={'pt-2 px-3 float-end' } hidden={isHideSaveButtonGroup}>
                    <Button onClick={resetTabHandler}>
                        Отмена
                    </Button>
                    <Button type={"submit"} form={formId}>
                        Сохранить
                    </Button>
                </ButtonGroup>
        </Container>
    );
};

export default ButtonGroupWithAttach;