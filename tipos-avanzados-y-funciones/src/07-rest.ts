import {ROLES, User} from './01-enums';

const currentUser:User = {
    username: 'andres',
    role: ROLES.CUSTOMER
}

export const checkAdmin = ():boolean => {
    if (currentUser.role === ROLES.ADMIN){
        return true
    }
    return false
}

export const checkRole = (role1:string, role2:string):boolean => {
    if (currentUser.role === ROLES.ADMIN){
        return true
    }
    return false
}
//console.log(checkRole(ROLES.ADMIN, ROLES.SELLER));

export const checkRoleV2 = (roles:string[]):boolean => {
    if (roles.includes(currentUser.role)){
        return true
    }
    return false
}
//console.log(checkRoleV2([ROLES.ADMIN, ROLES.SELLER]));

export const checkRoleV3 = (...roles:string[]):boolean => {
    if (roles.includes(currentUser.role)){
        return true
    }
    return false
}
console.log(checkRoleV3(ROLES.ADMIN, ROLES.SELLER));