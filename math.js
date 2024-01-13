//create a library for addition ,subtraction,
//and multiplication

const getSum=(num1, num2)=>{
    return(num1+num2);
};

const getSub=(num1, num2)=>{
   return(num1-num2);
};

const getMul=(num1, num2)=>{
    return(num1*num2);
};

module.exports = {getSum,getSub,getMul};