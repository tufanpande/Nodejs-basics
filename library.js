//Create your own module(library)
// 1. write a function
// 2.export that function out of the file
// 3. require that file in the server fikr
const getHelllo=()=>{
    console.log("hello from library")

};
const getNamaste=(name)=>{
    console.log(`Namaste ${name}`);
};
const getKonichiwa=(hello)=>{
    console.log(`Konichiwa ${hello}`);
};
module.exports = {getHelllo,getNamaste,getKonichiwa};