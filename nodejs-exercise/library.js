//write a js library and import it into index file
//Library should contain and multiply  function


const add=( num1, num2)=>{
    return num1+ num2;
};
const mul=(num1, num2)=>{
    return num1*num2;
};
module.exports = {add,mul};
//Write a js function that uses proper-upper-case