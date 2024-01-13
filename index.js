const http = require("http");
const greeting = require("./library");
const math=require("./math.js");
const upperCase= require("to-upper");
http
.createServer((request,response)=>{
    const result= upperCase("Hello Tufan"); //HELLO RAKTIM
    console.log(result);
    const sum =math.getSum(10,30);
    const mul=math.getMul(10,30);
    const sub=math.getSub(10,40);
    console.log(sum);
    console.log(mul);
    console.log(sub);
    greeting.getHelllo();
    greeting.getNamaste("Tufan");
    greeting.getKonichiwa("Hello");
    response.writeHead(200,{"Content-Type": "text/html"});
    response.end("Hello Tufan");
    
})
.listen(8000);
console.log("Server is running");