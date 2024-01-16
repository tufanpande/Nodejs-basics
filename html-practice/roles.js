// write  a function that takes two parameters (userRole, roles,)
//return true or false based on the rol check
const userRole=["admin", "vendor"];
const roles =[ "admin","vendor","inventoryManager"];
const checkRole=(userRoles,roles)=>{
    const check = roles.map((role)=>userRole.includes(role));
    return check.includes(true);
    // return userRole.includes(userRole);
};
const check= checkRole(userRole,roles);
console.log(check);
// const res =checkRole("des");
// console.log(res);