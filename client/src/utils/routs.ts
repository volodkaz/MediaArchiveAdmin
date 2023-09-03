import {Location} from "react-router-dom";

export enum Routs {
    ADMIN_ROUT='/admin',
    LOGIN_ROUT='/login',
    REGISTRATION_ROUT='/registration',
    USER_DETAILS_ROUT='/user_details',
    MEDIA_ROUT='/media',
    DEFAULT_ROUT='/',
    ADMIN_USER='user',
    ADMIN_MEDIA='media'
}

export const isRegisterForm = function(location: Location){
    return location.pathname === Routs.REGISTRATION_ROUT
};

export enum Components {
    ADMIN_USER_NAMES_COMPONENT = 1,
    ADMIN_MEDIA_NAMES_COMPONENT = 2
}