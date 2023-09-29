import React from 'react';
import {Form} from "react-bootstrap";
import {FormControlProps} from "react-bootstrap/FormControl";
import {Controller, FieldValues, UseControllerProps} from "react-hook-form";
import FieldOverlayTrigger from "./FieldOverlayTrigger";

interface FormControlRequiredProps<T extends FieldValues> {
    controlProps: FormControlProps;
    errorMessage?: string;
    props: UseControllerProps<T>;
    tooltipText?: string;
}

function FormControlRequired<T extends FieldValues>({   controlProps,
                                                        errorMessage,
                                                        props,
                                                        tooltipText,
                                                    }: FormControlRequiredProps<T>) {
    return (
        <div>
            <Controller control={props.control}
                        name={props.name}
                        rules={
                            {
                                required:
                                    {
                                        value: true,
                                        message: errorMessage ? errorMessage : "Обязательно"
                                    }
                            }
                        }
                        render={
                            (
                                {field: {onChange, value}, fieldState: {invalid}}
                            ) => {
                                if(controlProps.readOnly || !tooltipText){
                                    return <Form.Control value={value}
                                                         onChange={
                                                             (val) =>
                                                                 onChange(val.target.value)}
                                                         {...controlProps}
                                                         isInvalid={invalid}
                                    />
                                }
                                return (
                                    <FieldOverlayTrigger placement={'right'}
                                                         text={tooltipText}
                                                         element={<Form.Control value={value}
                                                                                onChange={
                                                                                    (val) =>
                                                                                        onChange(val.target.value)}
                                                                                {...controlProps}
                                                                                isInvalid={invalid}
                                                         />}

                                    />
                                )
                            }
                        }
            />
        </div>
    );
}

export default FormControlRequired;