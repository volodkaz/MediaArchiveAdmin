import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./style/App.css"
import {useTypedDispatch} from "./hook/useTypedSelector";
import {checkAuth} from "./store/actions/authAction";
import {Spinner} from "react-bootstrap";
import {AUTH_TOKEN} from "./utils/constants";
import {IUserRequest} from "./models/request/IUserRequest";
import ErrorContainer from "./components/error/ErrorContainer";
import NavContainer from "./components/admin/NavContainer";

function App() {
    const [isLoading, setLoading] = useState(true);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        if(localStorage.getItem(AUTH_TOKEN)){
            dispatch(checkAuth({} as IUserRequest))
                .finally(() => setLoading(false))
        }else{
            setLoading(false);
        }
    }, [dispatch])

    if(isLoading){
        return <Spinner animation={"grow"} />
    }
  console.log("APP")
  return (
    <BrowserRouter>
        <ErrorContainer/>
        <NavContainer/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
