import React from 'react';
import {Button, Form, Modal, Spinner} from "react-bootstrap";
import CreateUserInfoProps from "./CreateUserInfoProps";
import {Controller} from "react-hook-form";

const CreateUserInfoTab: React.FC<CreateUserInfoProps> = React.memo(({tabTypes, onHideHandler, show, isLoading,
                                                                         useFormReturn, formState, onSubmit}) => {

    return (

        <Modal show={show} onHide={onHideHandler}  centered={true}>
            {isLoading && <Spinner animation={"grow"}/>}
            <Modal.Header>
                <Modal.Title id={"contained-modal-title-vcenter"}>
                    Добавить новую вкладку
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={useFormReturn.handleSubmit(onSubmit)} id={'createTagForm'}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="tabNameInputModal">Название вкладки</Form.Label>
                        <Form.Control id="tabNameInputModal" placeholder="Название вкладки"
                                      {...(useFormReturn.register('name',
                                              {
                                                  required: "Обязательное поле"
                                              }, ))
                                      }
                        />
                        {formState.errors.name && <div style={{color: 'red'}}>{formState.errors.name.message}</div>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="tabCommentInputModal">Название вкладки</Form.Label>
                        <Form.Control id="tabCommentInputModal" placeholder="Комментарий"
                                      {...(useFormReturn.register('comment',
                                              {
                                                  required: "Обязательное поле"
                                              }, ))
                                      }
                        />
                        {formState.errors.comment && <div style={{color: 'red'}}>{formState.errors.comment?.message}</div>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="tabTypeInputModal">Тип вкладки</Form.Label>
                        <Controller control={useFormReturn.control}
                                    name={'tabTypeId'}
                                    rules={
                                        {
                                            min: {
                                                message: 'Поле обязательное',
                                                value: 1
                                            }
                                        }
                                    }
                                    render={
                            ({field:{onChange, value}, fieldState:{error}}) => (
                                <div>
                                <Form.Select id="tabTypeInputModal"
                                             value={value}
                                             onChange={(val) =>
                                                 onChange(Number(val.target.value))}
                                >
                                    <option className={'text-info'} value={-1}>Выберите тип вкладки</option>

                                    {tabTypes.map(tabType => <option value={tabType.id}
                                                                     key={tabType.id}>
                                        {tabType.comment}</option>)}
                                </Form.Select>
                                    {error && <div style={{color: 'red'}}>{error.message}</div>}
                                </div>
                            )
                        }/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHideHandler}>Закрыть</Button>
                <Button variant={'outline-success'}
                        // onClick={createUserInfoTab}
                    type={'submit'}
                        title={"Создать вкладку"}
                        disabled={!formState.isValid}
                    form={'createTagForm'}
                >Создать</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateUserInfoTab;