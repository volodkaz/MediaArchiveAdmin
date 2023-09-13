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
    createUserTab = "/userTab/createUserTab",
    deleteUserTab = "/userTab/deleteUserTab",
    fetchUserTab = "/userTab/fetchUserTab",

}
export enum role{
    createRole = "/role/createRole",
    deleteRole = "/role/deleteRole",
    fetchAllRoles = "/role/getAllRoles",

}