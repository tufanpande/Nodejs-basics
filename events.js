// const events = require("events");
// //event initialize
// const eventEmitter = new events.EventEmitter();
// //fn define
// const sayHello=()=>{
//     console.log("I am Hello");

// };
// //assign
// eventEmitter.addListener("hello",sayHello);// defined event name as hello
// //call the  event
// eventEmitter.emit("hello");

const events = require("events");
const eventEmitter= new events.EventEmitter();
const useGmail=()=>{
    console.log("I am Gmail");
};
eventEmitter. addListener("Gmaail", useGmail);
eventEmitter.emit("Gmaail");
