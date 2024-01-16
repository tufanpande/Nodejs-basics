const bcryptjs = require("bcryptjs");
//hash
const encryptPw= (string)=>{
    return bcryptjs.hashSync(string, 10);

};
const hashedPw= encryptPw("password");

// compare 
const comparePw = (string , hash)=>{
    return bcryptjs.compareSync(string , hash);
};
const isValidPw = comparePw("passwords",hashedPw);
console.log({isValidPw});