export enum auth{
    login = "/auth/login",
    registration = "/auth",
    logout = "/auth/logout",
    checkAuth = "/auth/check",
}
export enum user{
    createUser = "/user/createUser",
    deleteUser = "/user/deleteUser",
    fetchAllUsers = "/user/fetchUsers",

}
export enum userInfo{
    createUserInfo = "/userInfo/createUserInfo",
    updateUserInfo = "/userInfo/updateUserInfo",
    deleteUserInfo = "/userInfo/deleteUserInfo",
    fetchUserInfo = "/userInfo/fetchUserInfo",

}
export enum userInfoTabType{
    createUserInfoTabType = "/userInfoTab/createUserInfoTabType",
    deleteUserInfoTabType = "/userInfoTab/deleteUserInfoTabType",
    fetchUserInfoTabType = "/userInfoTab/fetchUserInfoTabType",

}
export enum role{
    createRole = "/role/createRole",
    deleteRole = "/role/deleteRole",
    fetchAllRoles = "/role/getAllRoles",

}