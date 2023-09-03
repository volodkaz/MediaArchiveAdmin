import {ChangeEvent, useState} from "react";

interface Props{
field: Field;
meta: Meta;
}

interface Field{
    value: string;
    onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: () => void;
}

interface Meta{
    touched: boolean;
    error: string;
}

function onchangeHandler(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(e.target.value);
}

function onBlurHandler() {
    setDirty(true);
}

const [value, setValue] = useState('');
const [isDirty, setDirty] = useState(false);
const [error, setError] = useState('');

export const useField = (name:string, validation: []) => {


    const field: Field = {value: value, onChange: onchangeHandler, onBlur: onBlurHandler};
    const meta: Meta = {touched: isDirty, error:''};
    return {field, meta};
}