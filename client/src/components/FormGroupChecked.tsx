import React, {FC, useEffect} from 'react';
import {Form} from "react-bootstrap";
import {useField} from "formik";

interface FormGroupCheckedProps{
    className: string;
    name: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    title?: string;
}

const FormGroupChecked: FC<FormGroupCheckedProps> = ({ className, name, ...props }) => {
    const [field, meta] = useField(name);
    const isValid = meta.touched && meta.error === undefined;
    const isInvalid = meta.touched && meta.error !== undefined;

    return (
            <Form.Group className={className} controlId={name}>
                <Form.Control
                    name={name}
                    {...props}
                    value={field.value}
                    isValid={isValid}
                    isInvalid={isInvalid}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                />
                {isInvalid && <Form.Text className="text-danger">{meta.error}</Form.Text>}
            </Form.Group>
        );
    };


export default FormGroupChecked;