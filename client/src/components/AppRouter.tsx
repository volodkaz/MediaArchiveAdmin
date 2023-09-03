import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {useTypedSelector} from "../hook/useTypedSelector";
import {authChildRouts, authRoutes, publicRoutes} from "../routes";
import {getAuthUser} from "../store/endpoints/auth";

const AppRouter = () => {
    const user = useTypedSelector(getAuthUser)

    return (
        <Routes>
            {user.isAuth && user.client?.isAdmin &&  authRoutes.map((elem) =>
            <Route key={elem.path} path={elem.path} Component={elem.Component}>
                {authChildRouts.get(elem.path) && authChildRouts.get(elem.path)!.map((child) =>
                    <Route key={child.path} path={child.path} Component={child.Component}/>
                )}
            </Route>)}

            {publicRoutes.map((elem) =>
            <Route key={elem.path} path={elem.path} Component={elem.Component} />)}
        </Routes>
    );
}

export default AppRouter;