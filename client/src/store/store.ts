import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import adminReducer from "./reducers/AdminSlice";
import {roleApi} from "../services/RoleService";
import errorReducer from "./reducers/ErrorReducer";
import userReducer from "./reducers/UserSlice";
import roleReducer from "./reducers/RoleSlice";
import userInfoReducer from "./reducers/UserInfoSlice"

const rootReducer = combineReducers({
    authReducer: authReducer,
    adminReducer: adminReducer,
    errorReducer:  errorReducer,
    userReducer: userReducer,
    roleReducer: roleReducer,
    userInfoReducer: userInfoReducer,
    // [authApi.reducerPath]: authApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    [roleApi.reducerPath]: roleApi.reducer
})

const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware =>
            getDefaultMiddleware().concat(/*authApi.middleware, userApi.middleware,*/ roleApi.middleware)
        )
    })

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;