import React, {useCallback} from 'react';
import {ErrorState} from "../../models/store/error";
import {useTypedDispatch, useTypedSelector} from "../../hook/useTypedSelector";
import {resetError} from "../../store/reducers/ErrorReducer";
import ErrorNav from "./ErrorNav";
import {getError} from "../../store/endpoints/error";

interface ErrorContainerProps{
    error?: ErrorState;
}
const ErrorContainer: React.FC<ErrorContainerProps> = () => {

    function equalError(nextError: ErrorState, prevError: ErrorState): boolean {
        if(prevError.isError !== nextError.isError){
            return false;
        }
        if(prevError.error.type !== nextError.error.type){
            return false;
        }
        if(prevError.error.message !== nextError.error.message){
            return false;
        }
        return true;
    }

    const {error, isError} = useTypedSelector(getError, equalError)
    const dispatch = useTypedDispatch()

    const onCloseHandler = useCallback(() => {
        dispatch(resetError(''))
    }, []);

    return (
        <ErrorNav error={error} isShow={isError} onCloseHandler={onCloseHandler}/>
    );
};

export default ErrorContainer;