import {Role} from "../models/store/role";

export function isEqualsArray<T>(secondArray: T[], firstArray: T[], isEquals: (firstElement: T, secondElement: T) => boolean)
{
    let arr = firstArray.filter(service => secondArray.every(item => !isEquals(item, service)));
    // console.log(arr)
    return arr.length === 0;
}

export function isEqualsRoles(secondArray: Role[], firstArray: Role[]){
    let arr = firstArray.filter(service => secondArray.every(item => item.roleId !== service.roleId));
    console.log(arr)
    return arr.length === 0;
}
