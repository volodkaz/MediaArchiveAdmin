import * as yup from "yup";
import {ERRORS} from "./validationconstant";

export const validationLoginSchema = yup.object().shape({
    login: yup.string().min(3, ERRORS.MIN_LENGTH_IS + ' 3').required(ERRORS.FIELD_REQUIRED),
    password: yup.string().min(3, ERRORS.MIN_LENGTH_IS + ' 3').required(ERRORS.FIELD_REQUIRED)
});

export const validationRegistrationSchema = validationLoginSchema.shape({
    checkPassword: yup
        .string()
        .oneOf([yup.ref('password')], ERRORS.PASSWORDS_DO_NOT_MUCH)
        .required(ERRORS.FIELD_REQUIRED)
});

export const validationCreateUserModalForm = validationLoginSchema.shape({
    checkPassword: yup
        .string()
        .oneOf([yup.ref('password')], ERRORS.PASSWORDS_DO_NOT_MUCH)
        .required(ERRORS.FIELD_REQUIRED)
});
export const validationCreateRoleModalForm =  yup.object().shape({
    role: yup.string().min(3, ERRORS.MIN_LENGTH_IS + ' 3').required(ERRORS.FIELD_REQUIRED)
});